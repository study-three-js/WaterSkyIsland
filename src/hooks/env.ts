import { Scene } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const envFun = (THREE: typeof import("three"), scene: Scene) => {
  // 载入环境纹理hdr
  const hdrLoader = new RGBELoader();
  hdrLoader.loadAsync("/src/assets/050.hdr").then((texture) => {
    // 纹理-球面的映射
    texture.mapping = THREE.EquirectangularReflectionMapping;
    // 背景
    scene.background = texture;
    // 环境
    scene.environment = texture;
  });

  // 设置灯光
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(-100, 100, 10);
  scene.add(light);
}

export default envFun