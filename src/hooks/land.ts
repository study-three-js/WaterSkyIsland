import { Scene } from "three";
// 导入glf载入库
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// 解压
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const landFun = (THREE: typeof import("three"), scene: Scene) => {
  // 添加小岛模型
  // 实例化glf载入
  const loader = new GLTFLoader()
  // 实例化draco载入库
  const dracoLoader = new DRACOLoader()
  // 设置draco载入库的地址
  dracoLoader.setPath('/src/assets/draco/')

  loader.setDRACOLoader(dracoLoader)

  //src\assets\model\island2.glb
  loader.load('/src/assets/model/island2.glb', (gltf => {
    console.log('2342');

    scene.add(gltf.scene)
  })
  )
}

export default landFun