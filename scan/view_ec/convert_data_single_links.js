/**
 *
 * 将当个数据的imports、extend、implements
 *
 *
 *
 */

// node:
//
// {
//     name: 'Node 4',
//         x: 550,
//     y: 500
// }

function convert_node(data) {

    let nodes = [];

    // 自身
    let self = {
        name: data.name,
        x: 0,
        y: 0
    }
    nodes.push(self);

    // imports 第一象限
    let startPos = {x: 50, y: 50};
    data.imports.forEach(function (importItem, index) {
        // 5个 ，向上
        const maxCount = 5;
        const fix = 50;
        nodes.push({
            name: importItem,
            x: startPos.x + (index & maxCount) * fix,
            y: startPos.y + (index / maxCount) * fix
        });
    });

    return nodes;
}

// link:

function convert_link(data) {
    let links = [];

    data.imports.forEach(function (importItem, index) {
        links.push({
            source: data.name,
            target: importItem,
            symbolSize: [5, 20],
            label: {
                show: true
            },
            lineStyle: {
                width: 5,
                curveness: 0.2
            }
        })
    })
    return links;
}

function convert_link_data(data) {
    return {
        nodes: convert_node(data),
        links: convert_link(data)
    };
}
