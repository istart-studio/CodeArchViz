function render_graph(globeData, clickFunc) {

    function echarts_click(param) {
        console.log(param);
        var json = param.data.sourceData;
        var options = {
            collapsed: false,
            withQuotes: false
        };
        $('#json-render').jsonViewer(json, options);
        if (json) {
            render_left_tree("graph_left_tree", json, globeData)
            render_right_tree("graph_right_tree", json)
            if (clickFunc) {
                clickFunc(json)
            }
        }
    }

    // 全包 引用关系图
    function render_source_graph(divId, globeData) {
        const allPackageData = convert_data_all_package(globeData);
        var dom = document.getElementById(divId);
        var myChart = echarts.init(dom);
        var option;
        myChart.on('click', echarts_click);
        // myChart.showLoading();
        // myChart.hideLoading();
        option = {
            // title: {
            //     text: 'Java Dependencies'
            // },
            tooltip: {},
            legend: [
                {
                    data: allPackageData.categories.map(function (a) {
                        return a.name;
                    })
                }
            ],
            series: [
                {
                    name: '引用关系',
                    type: 'graph',
                    layout: 'none',
                    data: allPackageData.nodes,
                    links: allPackageData.links,
                    categories: allPackageData.categories,
                    roam: true,
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    },
                    labelLayout: {
                        hideOverlap: true
                    },
                    scaleLimit: {
                        min: 0.01,
                        max: 30
                    },
                    lineStyle: {
                        color: 'source',
                        curveness: 0.3
                    },
                    emphasis: {
                        focus: 'adjacency',
                        label: {
                            position: 'right',
                            show: true
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }

    // 被引用 左树图
    function render_left_tree(divId, data, globeData) {
        var graphData = convert_left_tree(data, globeData);
        var dom = document.getElementById(divId);
        var myChart = echarts.init(dom);
        var option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            title: {
                text: data.name + ' 引用, 共计：' + graphData.nodes.children.length
            },
            series: [
                {
                    type: 'tree',
                    data: [graphData.nodes],
                    top: '1%',
                    left: '30%',
                    bottom: '1%',
                    right: '7%',
                    symbolSize: 7,
                    edgeShape: 'polyline',
                    orient: 'RL',
                    roam: true,
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    },
                    leaves: {
                        label: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        };
        myChart.setOption(option);

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }

    // 引用 右树图
    function render_right_tree(divId, data) {

        var graphData = convert_right_tree(data);

        var dom = document.getElementById(divId);
        var myChart = echarts.init(dom);
        var option;
        option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            title: {
                text: data.name + ' 依赖, 共计：' + graphData.nodes.children.length
            },
            series: [
                {
                    type: 'tree',
                    id: 0,
                    name: graphData.nodes.name + ' 依赖树',
                    data: [graphData.nodes],
                    top: '10%',
                    left: '8%',
                    bottom: '22%',
                    right: '20%',
                    symbolSize: 7,
                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 3,
                    roam: true,
                    lineStyle: {
                        width: 2
                    },
                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        };
        myChart.setOption(option);

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }

    return render_source_graph("graph", globeData);
}