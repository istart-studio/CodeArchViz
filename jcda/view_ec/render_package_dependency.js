function render_package_dependency(globeData, options) {

    function single_package(searchPackageName) {
        // 查找指定包内与其他包之间的关系（任一）

        const data = {
            searchPackageName: searchPackageName,
            notSearchPackageName: options.excludePackages,
            reference: {clients: {}, servers: {}},
            dependency: {},//{"package1":$count,}
        };

        /**
         * 引用 >> 使用方 ：当前包内被引用类:[哪些类引用了此类]
         * @param javaClass
         * @param importPackageName
         */
        function convert_reference_clients(javaClass, importPackageName) {
            if (matchExcludePackage(javaClass.package)) {
                return;
            }
            if (!data.reference.clients[javaClass.package]) {
                data.reference.clients[javaClass.package] = {};
            }
            const javaClassFullName = javaClass.name;
            if (data.reference.clients[javaClass.package][javaClassFullName]) {
                data.reference.clients[javaClass.package][javaClassFullName].push(importPackageName);
            } else {
                data.reference.clients[javaClass.package][javaClassFullName] = [importPackageName];
            }
        }

        /**
         * 引用 >> 提供服务方 ：引用类（提供方）:[引用哪些类]
         * @param importPackageName
         * @param javaClass
         */
        function convert_reference_servers(importPackageName, javaClass) {
            if (matchExcludePackage(javaClass.package)) {
                return;
            }
            const javaClassFullName = javaClass.package + "." + javaClass.name;
            if (data.reference.servers[importPackageName]) {
                // data.reference.servers[importPackageName].count = data.reference.servers[importPackageName].count + 1;
                data.reference.servers[importPackageName].push(javaClassFullName);
            } else {
                data.reference.servers[importPackageName] = [javaClassFullName];
            }
        }

        function matchExcludePackage(packageName) {
            for (let i = 0; i < options.excludePackages.length; i++) {
                if (packageName.indexOf(options.excludePackages[i]) > -1) {
                    return true;
                }
            }
            return false;
        }

        /**
         * 引用，被其他包（类）引用，在类中具有import {packageName}
         * @param javaClass
         * @param packageName
         */
        function convert_reference(javaClass, packageName) {
            // 不统计同包内的类imports
            if (javaClass.package.indexOf(packageName) < 0) {
                console.log(javaClass.package);
                for (let j = 0; j < javaClass.imports.length; j++) {
                    const importPackageName = javaClass.imports[j];
                    if (importPackageName.indexOf(packageName) > -1) {
                        // 用户端（使用方）：当前包内被引用类:[哪些类引用了此类]
                        convert_reference_clients(javaClass, importPackageName);
                        // 引用类（提供方）:[引用哪些类]
                        convert_reference_servers(importPackageName, javaClass);
                    }
                }
            }
        }

        function convert_dependence(javaClass, packageName) {
            if (javaClass.package.indexOf(packageName) > -1) {
                data.dependency[javaClass.package] = data.dependency[javaClass.package] ? data.dependency[javaClass.package] + 1 : 1;
            }
        }

        const convert = (globeData, searchPackageName) => {

            for (let i = 0; i < globeData.length; i++) {
                const javaClass = globeData[i];
                // 引用，被其他包（类）引用，在类中具有import {packageName}
                convert_reference(javaClass, searchPackageName);

                // 依赖,当前包（类）依赖，在类中具有import {other package}
                convert_dependence(javaClass, searchPackageName);
            }

            console.log(data);
        }

        convert(globeData, searchPackageName);
        return data;
    }

    const render_data = {};
    for (let i = 0; i < options.searchPackages.length; i++) {
        const searchPackageName = options.searchPackages[i];
        const data = single_package(searchPackageName);
        render_data[searchPackageName] = data;
    }

    $(options.divId).jsonViewer(render_data, options);
}