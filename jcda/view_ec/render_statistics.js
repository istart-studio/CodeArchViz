/**
 * option:{limit:10}
 * @param globeData
 * @param searchPackage
 * @param option 配置
 */
function render_statistics(globeData, searchPackage, option) {

    let _option = {
        limit: option.limit ? option.limit : 10
    }

    // 根据包进行排序，前10
    function sort(globeData, searchPackage) {
        let groupByName = {};

        globeData.forEach(function (data) {
            data.imports.forEach(function (importItem) {
                if (importItem.startsWith(searchPackage)) {
                    if (groupByName[importItem]) {
                        groupByName[importItem] += 1;
                    } else {
                        groupByName[importItem] = 1;
                    }
                }
            })
        })
        // Create items array
        var items = Object.keys(groupByName).map(function (key) {
            return [key, groupByName[key]];
        });

        // Sort the array based on the second element
        items.sort(function (first, second) {
            return second[1] - first[1];
        });
        return items.slice(0, _option.limit);
    }

    // 全部统计最TOP的被引用
    function convert_data_top_ref(sortedData) {
        let render_data = {
            names: [],
            values: []
        };
        sortedData.forEach(function (data) {
            render_data.names.push(data[0]);
            render_data.values.push(data[1]);
        })

        return render_data;
    }

    var sortedData = sort(globeData, searchPackage);
    var renderData = convert_data_top_ref(sortedData, searchPackage);

    function render_top_ref(divId, renderData, searchPackage) {
        var dom = document.getElementById(divId);
        var myChart = echarts.init(dom);
        var option = {
            grid: {
                left: 350
            },
            xAxis: {},
            yAxis: {
                type: 'category',
                data: renderData.names,
                axisLabel: {
                    width: 45,
                    fontSize: 10,
                    // margin: 80,
                    // overflow: 'break',
                    interval: 0,
                    rotate: 0,
                    padding: [5, 5],
                    formatter: function (value, index) {
                        return value.replace(searchPackage, '.');
                    },
                },

                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
            },
            series: [
                {
                    realtimeSort: true,
                    name: searchPackage,
                    type: 'bar',
                    data: renderData.values,
                    roam: true,
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    }
                },
            ],
            legend: {
                show: true
            },
            animationDuration: 0,
            animationDurationUpdate: 3000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
        };
        myChart.setOption(option);

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }

    render_top_ref("graph_top_ref", renderData, searchPackage)
}