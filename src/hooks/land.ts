import { Scene } from "three";
// 导入gltf载入库 - 用于创出小岛模型
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// 解压
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const landFun = (scene: Scene) => {
  // 添加小岛模型
  // 实例化gltf载入库
  const loader = new GLTFLoader().setPath("/src/assets/model/");
  // 实例化draco载入库
  const dracoLoader = new DRACOLoader();
  // 添加draco载入库
  dracoLoader.setDecoderPath("/src/assets/draco/");

  // 添加draco载入库
  loader.setDRACOLoader(dracoLoader);

  // 加载模型
  // 这里报错把 three.js换成^0.137.5 版本
  loader.load("island2.glb", gltf => {
    scene.add(gltf.scene)
  })
}

export default landFun