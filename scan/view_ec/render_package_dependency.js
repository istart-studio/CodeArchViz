function render_package_dependency(globeData, packageName, options) {

    // 查找指定包内与其他包之间的关系（任一）

    const data = {
        name: packageName,
        reference: {clients: {}, servers: {}},
        dependency: {},//{"package1":$count,}
    };

    /**
     * 引用 >> 使用方 ：当前包内被引用类:[哪些类引用了此类]
     * @param javaClass
     * @param importPackageName
     */
    function convert_reference_clients(javaClass, importPackageName) {
        if (!data.reference.clients[javaClass.package]) {
            data.reference.clients[javaClass.package] = {};
        }
        const javaClassFullName = javaClass.name;
        if (data.reference.clients[javaClass.package][javaClassFullName]) {
            data.reference.clients[javaClass.package][javaClassFullName].count = data.reference.clients[javaClass.package][javaClassFullName].count + 1;
            data.reference.clients[javaClass.package][javaClassFullName].detail.push(importPackageName);
        } else {
            data.reference.clients[javaClass.package][javaClassFullName] = {
                count: 1,
                detail: [importPackageName]
            }
        }
    }

    /**
     * 引用 >> 提供服务方 ：引用类（提供方）:[引用哪些类]
     * @param importPackageName
     * @param javaClass
     */
    function convert_reference_servers(importPackageName, javaClass) {
        if (data.reference.servers[importPackageName]) {
            data.reference.servers[importPackageName].count = data.reference.servers[importPackageName].count + 1;
            data.reference.servers[importPackageName].detail.push(javaClass.name);
        } else {
            data.reference.servers[importPackageName] = {
                count: 1,
                detail: [{package: javaClass.package, className: javaClass.name}]
            }
        }
    }

    const convert = (globeData, packageName) => {

        for (let i = 0; i < globeData.length; i++) {
            const javaClass = globeData[i];
            // 引用，被其他包（类）引用，在类中具有import {packageName}
            // 不统计同包内的类imports
            if (javaClass.package.indexOf(packageName) < 0) {
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

            // 依赖,当前包（类）依赖，在类中具有import {other package}
            if (javaClass.package.indexOf(packageName) > -1) {
                data.dependency[javaClass.package] = data.dependency[javaClass.package] ? data.dependency[javaClass.package] + 1 : 1;
            }
        }

        console.log(data);
    }

    convert(globeData, packageName);

    $(options.divId).jsonViewer(data, options);
}