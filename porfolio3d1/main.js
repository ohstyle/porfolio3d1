import './style.css'

import * as THREE from 'three';
import { WebGL1Renderer } from 'three';
/**========================================================================
 *                           1.scene
 *                            2.Camera
 *                              3.Renderer
 *========================================================================**/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const rederer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

rederer.setPixelRatio(window.devicePixelRatio);
rederer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(50);
rederer.render(scene, camera);
const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshBasicMaterial({color:0xff6347, wireframe:true});
/**========================================================================
 *                           3.Mesh = geometry + material
 *========================================================================**/
const torus = new THREE.Mesh(geometry,material);
scene.add(torus);

/**========================================================================
 *                           Function
 *========================================================================**/
function animate(){
    requestAnimationFrame(animate);
    rederer.render(scene,camera);
}
animate();