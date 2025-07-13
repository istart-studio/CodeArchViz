var source_instance = {
    "name": "AppStoreApiTest",
    "package": "com.dr.op.appstore.api",
    "type": "class",
    "imports": ["com.dr.OpApplication", "com.dr.op.app.http.req.AppStoreListRequest", "com.dr.op.app.http.req.AppStoreSubscribeRequest", "com.dr.op.app.http.resp.AppStoreListResponse", "com.dr.op.app.http.resp.AppStoreSubscriResponse", "com.dr.op.app.service.AppStoreService", "com.dr.op.globe.http.FallPaged", "com.google.common.collect.Sets", "lombok.Data", "lombok.extern.slf4j.Slf4j", "org.junit.Test", "org.junit.runner.RunWith", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.boot.test.context.SpringBootTest", "org.springframework.test.context.junit4.SpringRunner", "java.util.HashSet"],
    "class_name": "AppStoreApiTest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy/op/src/test/java/com/dr/op/appstore/api/AppStoreApiTest.java"
}

var blockBackgroundColors = {
    "class": 'rgba(240,255,255,' + (Math.random() * 0.5 + 0.25) + ')',
    "interface": 'rgba(144,238,144,' + (Math.random() * 0.5 + 0.25) + ')',
    "enum": 'rgba(32,178,170,' + (Math.random() * 0.5 + 0.25) + ')',
}

/**
 * 构建方块元素，目前最小整体
 * @param block json item
 */
function createElement(block) {
    var element = document.createElement('div');
    element.className = 'element';
    // 范围 0~1，0 表示全透明。
    element.style.backgroundColor = blockBackgroundColors[block.type] ? blockBackgroundColors[block.type] : 'rgba(100,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
    // element.style.backgroundColor = 'rgba(255,255,255,' + (Math.random() * 0.5 + 0.25) + ')';
    element.border = "1px solid " + blockBackgroundColors[block.type] ? blockBackgroundColors[block.type] : 'rgba(100,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
    // 名称
    var name = document.createElement('div');
    name.className = 'name';
    name.textContent = block.name;
    element.appendChild(name);
    //  包
    var packageName = document.createElement('div');
    packageName.className = 'package_name';
    packageName.textContent = block.package;
    element.appendChild(packageName);

    // 类型
    var symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = block.type;
    element.appendChild(symbol);

    //详情
    function ul(...info) {
        var html = "<ul>"
        for (let item of info) {
            html += "<li><span  class='tag'>" + item[0] + "</span> " + item[1] + "</li>";
        }
        return html + "</ul>";
    }

    var details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = ul(['package', block.package], ['source file', block.file_name]);
    element.appendChild(details);
    return element;
}


/**
 * 将内容元素分装为随机位置对象
 * @param element
 */
function randomPositionObj(element) {
    var object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    return object;
}

// 初始化 场景
var camera, scene, renderer;
var controls;

//设置透视投影的相机,默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里（视野角：fov 纵横比：aspect 相机离视体积最近的距离：near 相机离视体积最远的距离：far）
camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 3000;

scene = new THREE.Scene();

// 随机场景位置-集合
var items_by_random_position = [];

/**
 * 布局
 * @type {{table: Array, sphere: Array, helix: Array, grid: Array}}
 * table:表格布局
 * sphere:球体
 * helix：螺旋
 * grid:纵行栅格
 */
var targets = {sphere: []};

var element = createElement(source_instance);
//初始场景：随机分布
var item_by_random_position = randomPositionObj(element);
//将元素添加至场景中
scene.add(item_by_random_position);

// 元素（随机位置）添加至
items_by_random_position.push(item_by_random_position);

/**
 * 创建球体
 * @param center {x:400,y:0,z:0};//多个星球的中心位置
 * @param elements
 * @returns {Array}
 */
function createPlanet(planetsProp, elements) {

    function calcPosition(value, rate, centerVal) {
        return (value - centerVal) * rate + centerVal;
    }

    function makePlanetPoint(plantProp, vectorRate) {
        var object = new THREE.Object3D();
        var vector = new THREE.Vector3();//使用全局变量，用copy生成目标变量
        var center = plantProp.center;
        var planetRadius = plantProp.radius;
        var phi = Math.acos(-1 + (2 * i) / l);//TODO:planet point number,planet points total
        var theta = Math.sqrt(l * Math.PI) * phi;


        object.position.x = planetRadius * Math.cos(theta) * Math.sin(phi) + center.x;
        object.position.y = planetRadius * Math.sin(theta) * Math.sin(phi) + center.y;
        object.position.z = planetRadius * Math.cos(phi) + center.z;

        vector.copy({
            x: calcPosition(object.position.x, vectorRate, center.x),
            y: calcPosition(object.position.y, vectorRate, center.y),
            z: calcPosition(object.position.z, vectorRate, center.z)
        });

        // vector.copy(object.position).multiplyScalar(-2);//球面点（object）延伸2个标量的新空间点（vector）；
        object.lookAt(vector);//用来旋转对象,并将对象（object）面对空间中的点(参数vector)
        return object;
    }

    var planetsPoints = [];
    var vectorRate = 2;//放大标量

    for (var i = 0, l = elements.length; i < l; i++) {
        var object3D;
        if (i % 2 == 0) {
            object3D = makePlanetPoint(planetsProp[0], vectorRate);
        } else {
            object3D = makePlanetPoint(planetsProp[1], vectorRate);
        }
        planetsPoints.push(object3D);

    }

    return planetsPoints;
}

// 球坐标
var planetsProp = [
    {
        center: {x: 0, y: 0, z: 0},
        radius: 1400,
    }];

// 球点
var planetPoints = createPlanet(planetsProp, items_by_random_position);

for (var i = 0; i < planetPoints.length; i++) {
    targets.sphere.push(planetPoints[i]);
}

renderer = new THREE.CSS3DRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = 'absolute';
document.getElementById('container').appendChild(renderer.domElement);

//控制摄像机的速度及监听渲染事件
controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 0.5;
controls.minDistance = 500;
controls.maxDistance = 6000;
controls.addEventListener('change', render);


function transform(targets, objects, duration) {

    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {

        var object = objects[i];//随机位置的元素组
        var target = targets[i];//固定形状的元素组
        var speed = Math.random() * duration + duration;//速度

        new TWEEN.Tween(object.position)
            .to({x: target.position.x, y: target.position.y, z: target.position.z}, speed)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        // new TWEEN.Tween(object.rotation)
        //     .to({x: target.rotation.x, y: target.rotation.y, z: target.rotation.z}, speed)
        //     .easing(TWEEN.Easing.Exponential.InOut)
        //     .start();

    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

function animate() {

    requestAnimationFrame(animate);

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render(scene, camera);

}

transform(targets.sphere, items_by_random_position, 2000);

window.addEventListener('resize', onWindowResize, false);


animate();