var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight, 0.1, 1000);
var mesh;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// add icosahedron
var geometry = new THREE.OctahedronGeometry(20);
THREE.ImageUtils.crossOrigin = true;
var textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = true;

//Image taken by me

textureLoader.load('../images/P1120340.jpg', function(texture) {
  texture.wrapS = texture.wrapT =   THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    var material = new THREE.MeshLambertMaterial({map: texture} );
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  
  render();
});


camera.position.z = 100;

//var light = new THREE.DirectionalLight( 0xffffff, 1 );
//light.position.set( 0, 1, 0 );
//scene.add( light );

//var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
//light.position.set( 0, -1, 0 );
//scene.add( light );

//var light = new THREE.DirectionalLight( 0xffffff, 1 );
//light.position.set( 1, 0, 0 );
//scene.add( light );




var light = new THREE.PointLight( "#fc80e5");
light.position.set( 10, 0, 45 );
scene.add( light );


//var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
//light.position.set( 0, 0, 1 );
//scene.add( light );

//var light = new THREE.DirectionalLight( 0xffffff, 1 );
//light.position.set( 0, 0, -1 );
//scene.add( light );
//
//var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
//light.position.set( -1, 0, 0 );
//scene.add( light );


var render = function () {
    requestAnimationFrame( render );
    mesh.rotation.x += 0.02;
    mesh.rotation.y +=0.02;
    renderer.render(scene, camera);
};
