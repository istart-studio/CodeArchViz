/**
 * 组件耦合
 * 依赖关系应该由最不稳定指向最稳定
 * (I,A) 图
 * @param globeData
 * @param searchPackage
 */
function render_fan_in_out(globeData, searchPackage, options) {


    function convert_data(globeData, searchPackage) {

        const items = [];
        // “假设A指标是对组件抽象化程度的一个衡量，它的值是组件中抽象类与接口所占的比例。那么：
        // Nc：组件中类的数量。
        // Na：组件中抽象类和接口的数量。
        // A：抽象程度，A=Na/Nc。
        // A指标的取值范围是从0到1，值为0代表组件中没有任何抽象类，值为1就意味着组件中只有抽象类。”
        const abstractValue = function (javaClazz, globeData) {
            const imports = javaClazz.imports;
            let NcArray = [];
            let NaArray = [];


            globeData.forEach(item => {
                const fullName = item.package + "." + item.name;
                imports.forEach(importName => {
                    if (importName === fullName) {
                        switch (item.type) {
                            case "interface":
                            case "abstract class":
                                NaArray.push(item);
                                break;
                            case "class":
                            case "enum":
                                NcArray.push(item);
                                break;
                            default:
                                console.warn("未知类型:" + item.name + "," + item.type);
                        }
                    }
                });
            })

            return NaArray.length / NcArray.length;
        }

        // “Fan-in：入向依赖，这个指标指代了组件外部类依赖于组件内部类的数量。
        // Fan-out：出向依赖，这个指标指代了组件内部类依赖于组件外部类的数量。
        // I：不稳定性，I=Fan-out/（Fan-in+Fan-out）。该指标的范围是[0,1],I=0意味着组件是最稳定的，I=1意味着组件是最不稳定的。”

        // 被引用 入向依赖：Fan-In，外部组件依赖当前组件的数量。
        const convert_data_fan_in = function (data, globeData) {
            let fanIn = {value: 0, refs: []};
            const fullName = data.package + "." + data.name;
            globeData.forEach(function (item, index) {
                const itemFullName = item.package + "." + item.name;
                item.imports.forEach(function (importItem, index) {
                    if (importItem === fullName) {
                        fanIn.refs.push({
                            name: itemFullName
                        })
                    }
                })
            });
            fanIn.value = fanIn.refs.length;
            return fanIn;
        }

        // 引用 出向依赖：Fan-Out，当前组件依赖外部组件的数量。
        const convert_data_fan_out = function (data) {
            let fanOut = {value: 0, refs: []};
            if (!data.imports) {
                return self;
            }
            data.imports.forEach(function (importItem, index) {
                fanOut.refs.push({
                    name: importItem
                })
            });
            fanOut.value = fanOut.refs.length;
            console.log({name: data.name, value: fanOut.value})
            return fanOut;
        }

        // 不稳定性（I）计算：
        // 稳定组件：如果3个组件都依赖于X（Fan-In=3），而X不依赖于任何组件（Fan-Out=0），则X为稳定组件，不稳定性为0。
        // 不稳定性：(Fan-Out)/(Fan-In + Fan-Out)。为0时最稳定，为1时最不稳定。
        const convert_data_stable_unstable = function (fanOutValue, fanInValue) {
            // console.log({fanOut: fanOutValue, fanIn: fanInValue});


            return fanOutValue / (fanInValue + fanOutValue);
        }

        //抽象程度（A）计算：
        //抽象程度（A）= 组件中抽象类和接口的数量(引用其它的） / 组件中类的数量(引用其它的）
        // abstract class interface
        function convert_data_abstract(globeData, fanOutRefs) {

            let countByAbstractOrInterface = 0;
            let countByClass = 0;
            globeData.forEach(function (eachItem) {
                var eachItemFullName = eachItem.package + "." + eachItem.name;
                fanOutRefs.forEach(function (fanOutRef) {
                    if (fanOutRef.name === eachItemFullName) {
                        if (eachItem.type === 'abstract class' || eachItem.type === 'interface') {
                            countByAbstractOrInterface += 1;
                        } else {
                            countByClass += 1;
                        }
                    }
                })
            })

            if (countByClass === 0) {
                return 0;
            }

            return countByAbstractOrInterface / countByClass;
        }


        globeData.forEach(function (data) {
            if (!data.package.startsWith(searchPackage)) {
                return;
            }
            let item = {
                fullName: '',
                fanIn: {value: 0, refs: []},
                fanOut: {value: 0, refs: []},
                unstable: 0,
                abstract: 0,
            };
            item.fullName = data.package + "." + data.name;

            item.fanIn = convert_data_fan_in(data, globeData);
            item.fanOut = convert_data_fan_out(data, globeData);
            if ((item.fanOut.value + item.fanIn.value) === 0) {
                console.warn("无引用，无依赖:" + item);
            }
            item.unstable = convert_data_stable_unstable(item.fanOut.value, item.fanIn.value);
            item.abstract = abstractValue(data, globeData);
            items.push(item);
            console.log(item)
        })
        return items;
    }

    function convert_render_data(convertData) {
        // [{pos_data: [], name: ''},{pos_data: [], name: ''},]
        let render_data = [];
        convertData.forEach(function (convertDataItem) {
            render_data.push({
                pos_data: [convertDataItem.unstable, convertDataItem.abstract],
                name: convertDataItem.fullName
            })
        })
        return render_data;
    }

    // [{pos_data: [], name: ''},{pos_data: [], name: ''},]
    var convertData = convert_data(globeData, searchPackage)
    var renderData = convert_render_data(convertData);


    // 将不稳定性（I）作为横轴，抽象程度（A）作为纵轴
    function render(divId, render_data, searchPackage) {

        var dom = document.getElementById(divId);
        var myChart = echarts.init(dom);
        var option;
        option = option = {
            title: {
                text: '不稳定性（I）与 抽象程度（A）',
                subtext: 'Data from: ' + searchPackage
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '7%',
                bottom: '7%',
                containLabel: true
            },
            tooltip: {
                // trigger: 'axis',
                showDelay: 0,
                // formatter: function (params) {
                //     if (!params.value) {
                //         return params.name;
                //     }
                //     if (params.value.length > 1) {
                //         return (
                //             params.seriesName +
                //             ' :<br/>' +
                //             params.value[0] +
                //             'cm ' +
                //             params.value[1] +
                //             'kg '
                //         );
                //     } else {
                //         return (
                //             params.seriesName +
                //             ' :<br/>' +
                //             params.name +
                //             ' : ' +
                //             params.value +
                //             'kg '
                //         );
                //     }
                // },
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                }
            },
            toolbox: {
                feature: {
                    dataZoom: {},
                    brush: {
                        type: ['rect', 'polygon', 'clear']
                    }
                }
            },
            brush: {},
            legend: {
                // data: ['Female'],
                // left: 'center',
                // bottom: 10
            },
            xAxis: [
                {
                    name: '不稳定性（I）',
                    nameLocation: 'middle',
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        // formatter: '{value}  Fan-Out'
                    },
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 1
                }
            ],
            yAxis: [
                {
                    name: '抽象程度（A）',
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        // formatter: '{value} Fan-In'
                    },
                    splitLine: {
                        show: false
                    },
                    min: 0,
                    max: 1
                }
            ],
            series: [
                {
                    name: searchPackage,
                    type: 'scatter',
                    emphasis: {
                        focus: 'series'
                    },
                    // prettier-ignore
                    data: render_data.map(function (data) {
                        return {
                            name: data.name,
                            value: data.pos_data,
                            // label: {
                            //     name: 'a'
                            // },
                            itemStyle: {}
                        }
                    }),
                    markArea: {
                        silent: true,
                        itemStyle: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        },
                        data: [
                            [{
                                name: '',
                                coord: [0, 1]
                            }, {
                                coord: [1, 0]
                            }]
                        ]
                    },
                    // markPoint: {
                    //     data: [
                    //         {type: 'max', name: 'Max'},
                    //         {type: 'min', name: 'Min'}
                    //     ]
                    // },
                    markLine: {
                        symbol: 'none',
                        lineStyle: {
                            type: 'dotted',
                        },
                        data: [[
                            {
                                name: '中序列线',
                                coord: [0, 1]
                            },
                            {
                                coord: [1, 0]
                            }
                        ], [
                            {
                                name: '痛苦区',
                                coord: [0, 0.5]
                            },
                            {
                                coord: [0.5, 0]
                            }
                        ], [
                            {
                                name: '无用区',
                                coord: [0.5, 1]
                            },
                            {
                                coord: [1, 0.5]
                            }
                        ]]
                    }
                }
            ]
        };
        myChart.setOption(option);

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }

    render("fan_in_out", renderData, searchPackage);
}