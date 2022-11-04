import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import $ from 'jquery'

import './style.scss'

// init scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xC3D2D5)
scene.fog = new THREE.Fog(0xC3D2D5, 20, 100);

const canvas = document.querySelector('#canvas');
const canvasBoundings = canvas.getBoundingClientRect()
const renderer = new THREE.WebGLRenderer({canvas, antialias: true})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;

const camera = new THREE.PerspectiveCamera( 60, canvasBoundings.width / canvasBoundings.height, 0.1, 1000);
camera.position.z = 30;
camera.position.x = 10;
camera.position.y = 10;

//add light
const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.61 );
hemiLight.position.set( 0, 50, 0 );
scene.add( hemiLight );

const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
dirLight.position.set( -8, 12, 8 );
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
scene.add( dirLight );


// Floor
var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
var floorMaterial = new THREE.MeshPhongMaterial({
    color: 0x333333,
    shininess: 0
});

var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -0.5 * Math.PI;
floor.receiveShadow = true;
floor.position.y = -1;
scene.add(floor);

//controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
controls.autoRotateSpeed = 0.2; // 30

let carModel
//load model
const loader = new GLTFLoader();

function materialColor(color, shininess = 10) {
    return new THREE.MeshPhongMaterial( { color: color, shininess: 10 } );
}

const INITIAL_MAP = [
    {childID: "Shell", mtl: materialColor(0x21447d)},
    {childID: "Grill", mtl: materialColor(0x111111)},
    {childID: "Tire", mtl: materialColor(0x111111)},
    {childID: "Window", mtl: materialColor(0x222222)},
    {childID: "Interior", mtl: materialColor("#110011")},
];





function initColor(parent, type, mtl) {
    parent.traverse((o) => {
        if (o.isMesh) {
            if (o.name.includes(type)) {
                o.material = mtl;
                o.nameID = type; // Set a new property to identify this object
            }
        }
    });
}

function setMaterial(parent, type, mtl) {
    parent.traverse((o) => {
        if (o.isMesh && o.nameID != null) {
            if (o.nameID === type) {
                o.material = mtl;
            }
        }
    });
}

loader.load('./bmw.glb', function(gltf) {
    carModel = gltf.scene;

    carModel.traverse((o) => {
        if (o.isMesh) {

        }
    });

    // Set initial textures
    for (let object of INITIAL_MAP) {
        initColor(carModel, object.childID, object.mtl);
    }

// Set the models initial scale
    carModel.scale.set(2,2,2);

    // Offset the y position a bit
    carModel.position.y = 1.2;
    carModel.position.z = 8;
    carModel.position.x = -8;

    carModel.rotation.y = Math.PI / 4;

    // Add the model to the scene
    scene.add(carModel);

}, undefined, function(error) {
    console.error(error)
});

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvasPixelWidth = canvas.width / window.devicePixelRatio;
    var canvasPixelHeight = canvas.height / window.devicePixelRatio;

    const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
    if (needResize) {

        renderer.setSize(width, height, false);
    }
    return needResize;
}


function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
controls.update()
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
}

animate();


$('.change-car-color').on('input', function () {
    let $input = $(this)
    let selector = $input.data('car-selector')
    let color = $input.val()
    setMaterial(carModel, selector, materialColor(color))

})

$('.change-tire-size').on('input', function () {
    let $input = $(this)
    console.log($input.val())

    carModel.traverse((o) => {
        if (o.isMesh) {
            if (o.name.includes('Tire')) {
                let val = 0.8 + (0.2 / 100 * $input.val())
                o.scale.set(val, val, val)
            }
        }
    });
})
$('.optional-car-input').on('change', function() {
    let $input = $(this)
    let selector = $input.data('car-selector')
    carModel.traverse((o) => {
        if (o.isMesh) {
            if (o.name.includes(selector)) {
                o.visible = !$input.is(':checked')
            }
        }
    });
})