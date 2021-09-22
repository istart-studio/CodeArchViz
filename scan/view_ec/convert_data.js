var graph = {
    nodes: [],
    links: [],
    categories: [],
}

/**
 * nodes:
 * {
        "id": "0",
        "name": "Myriel",
        "symbolSize": 19.12381,
        "x": -266.82776,
        "y": 299.6904,
        "value": 28.685715,
        "category": 0
      }
 */

/**
 * links:
 * {
        "source": "1",
        "target": "0"
      }
 */

/**
 * categories:
 * {
        "name": "类目0"
      }
 */

/* 设置类型 并返回 类型的索引（ID） */
function gen_find_type(type) {
    for (var i = 0; i < graph.categories.length; i++) {
        if (type === graph.categories[i].name) {
            return i;
        }
    }
    graph.categories.push({"name": type})
    return graph.categories.length;
}

/* 计算大小 */
function calc_position_x(nodeSize) {

    // 自上而下,自左向右边
    // 起始 0,0
    var startPos = 0;
    // 当前 = 起始（固定）+ size * 每行每列固定间隔
    var fix = 140;
    return startPos + nodeSize * fix * Math.random();
}

function calc_position_y(nodeSize) {

    // 自上而下,自左向右边
    // 起始 0,0
    var startPos = 100;
    // 当前 = 起始（固定）+ size * 每行每列固定间隔
    var fix = 100;
    return startPos + nodeSize * fix * Math.random();
}

/* 按类型区域进行排列 */
function calc_pos_area(typeIndex) {
    // for (let i = 0; i < graph.categories.length; i++) {
    //     if (type.name === graph.categories[i].name) {
    //         return {x: i * 100 + 100 * Math.random(), y: i * 100 + 100 * Math.random()}
    //     }
    // }
    // return {x: -100 * Math.random(), y: -100 * Math.random()}

    // 每行12个
    let row = Math.floor(typeIndex / 12);
    let column = typeIndex % 12;
    let x = column * 2000 + 100 + 1000 * Math.random();
    let y = row * 2000 + 100 + 1000 * Math.random();

    return {x: x, y: y}
}

function merge_str(str, count) {
    let strArray = str.split('.', count);
    let mergeStr = "";
    for (let strArrayKey in strArray) {
        mergeStr += strArray[strArrayKey] + ".";
    }
    return mergeStr.substr(0, mergeStr.lastIndexOf("."));
}

/**
 * {
    "name": "AppAuth",
    "package": "com.dr.op.appstore.entity",
    "type": "class",
    "imports": [
      "io.swagger.annotations.ApiModel",
      "io.swagger.annotations.ApiModelProperty",
      "lombok.Data",
      "javax.persistence.*",
      "java.io.Serializable"
    ],
    "class_name": "AppAuth implements Serializable",
    "extend_name": "",
    "implements_name": [
      "Serializable"
    ],
    "file_name": "/Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy/op/src/test/java/com/dr/op/appstore/entity/AppAuth.java"
  }
 * @param data
 */
function gen_find_node(data) {
    var length = graph.nodes.length;
    var node_id = length;
    var package = merge_str(data.package, 4);
    if (package === "jointcert") {
        debugger;
    }
    console.log(package);
    var category = gen_find_type(package);

    var node = {
        "id": node_id,
        "name": data.name,
        "package": data.package,
        "fullName": data.package + "." + data.name,
        "symbolSize": 5, // 每次引用都增加其大小
        "x": calc_position_x(length),
        "y": calc_position_y(length),
        // "value": 28.685715,
        "category": category
    }
    for (var i = 0; i < graph.nodes.length; i++) {
        if (node.fullName === graph.nodes[i].fullName) {
            return i;
        }
    }
    graph.nodes.push(node);
    data["graphNodeId"] = node.id;
    return length;
}


function gen_find_link(data) {
    for (var nodeIndex = 0; nodeIndex < graph.nodes.length; nodeIndex++) {
        var node = graph.nodes[nodeIndex];
        for (var importIndex = 0; importIndex < data.imports.length; importIndex++) {
            var fullName = data.imports[importIndex];
            if (node.fullName === fullName) {
                var link = {
                    "source": data.graphNodeId,
                    "target": node.id
                }
                graph.links.push(link);
            }
        }
    }
}


function convert(dataCollection) {
    for (let i = 0; i < dataCollection.length; i++) {
        var data = dataCollection[i];
        gen_find_node(data)
    }
    for (let j = 0; j < dataCollection.length; j++) {
        var data = dataCollection[j];
        gen_find_link(data)
    }

    // 按类型进行区域布局


    for (let i = 0; i < graph.nodes.length; i++) {
        var node = graph.nodes[i];
        var pos = calc_pos_area(node.category);
        node.x = pos.x;
        node.y = pos.y;
    }

}
