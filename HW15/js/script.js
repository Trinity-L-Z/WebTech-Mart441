var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cube, cube2;
var modelObject;

function createBox() {
  var geometry = new THREE.BoxGeometry();
  //cube 1
  var material = new THREE.MeshBasicMaterial({
    color: 0xa3f47f //# = 0x , https://www.color-hex.com/color/1234ee
  });
  cube = new THREE.Mesh(geometry, material);  
  cube.position.set(50, 0, 0);  
  scene.add(cube);
  cube.scale.x = 15;
  cube.scale.y = 15; 
  cube.scale.z = 15; 
  animate();
}

//first box animation
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  createBox2();
  renderer.render(scene, camera);

}

function createBox2() {
  var geometry = new THREE.BoxGeometry();
  var material2 = new THREE.MeshBasicMaterial({
    color: 0xffe599
  });
  cube2 = new THREE.Mesh(geometry, material2);
  cube2.position.set(-30, 0, 0);
  cube.add(cube2);
  cube2.scale.x = 5;
  cube2.scale.y = 5;
  cube2.scale.z = 5; 

  animate2();
}


function animate2() {
  requestAnimationFrame(animate2);
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
}

// scene object and background color
function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color("rgb(77, 47, 93)");
  return scene;
}


function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(100, aspectRatio, 0.1, 1000);
  camera.position.set(0, 100, -10);
  return camera;
}

/** scene light
 * @param {obj} scene: the current scene object
 **/

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}

//renderer
function getRenderer() {
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
}

/**
 * controls to be used in the scene
 * @param {obj} camera: the three.js camera for the scene
 * @param {obj} renderer: the three.js renderer for the scene
 **/

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;
  return controls;
}

/**
 * Load Skull model
 **/

function loadModel() {
  loader = new THREE.OBJLoader();
  loader.load('models/Skull.obj', function (object) {
    object.rotation.z = Math.PI;
    modelObject = object;
    scene.add(object);
    animateModel();
  });
}

function animateModel() {
  requestAnimationFrame(animateModel);
  modelObject.rotation.x += 0.05;
  modelObject.rotation.y += 0.05;
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
};

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();


loadModel()

render();