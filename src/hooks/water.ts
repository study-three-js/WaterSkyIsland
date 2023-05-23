import { Scene } from "three";
// 导入水面
import { Water } from "three/examples/jsm/objects/Water2.js";

const waterFun = (THREE: typeof import("three"), scene: Scene) => {
  // 创建水面 (平面 --- 圆形)
  const waterGeometry = new THREE.CircleGeometry(300, 32);
  const water = new Water(waterGeometry, {
    // 宽
    textureWidth: 1024,
    // 高
    textureHeight: 1024,
    // 颜色
    color: 0xeeeeff,
    // 水的流动方向
    flowDirection: new THREE.Vector2(1, 1),
    // 水面波纹大小
    scale: 1,
  })
  // 水面需要盖住石头，所以往上抬高3m
  water.position.y = 3

  // 水面旋转至水平
  water.rotation.x = - Math.PI / 2
  scene.add(water)
}

export default waterFun