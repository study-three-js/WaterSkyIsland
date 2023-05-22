
// 导入控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const initFun = (THREE: typeof import("three")) => {
  // 初始化场景
  const scene = new THREE.Scene()

  //初始化相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  )
  // 设置相机的位置
  camera.position.set(-50, 50, 130)
  // 更新摄像头宽高比例
  camera.aspect = window.innerWidth / window.innerHeight
  // 更新摄像头投影矩阵
  camera.updateMatrix()
  scene.add(camera)

  // 初始化渲染器
  const renderer = new THREE.WebGLRenderer({
    // 设置更理想的状态，需要抗锯齿
    antialias: true
  })
  // 设置编码
  /**
   * // renderer.outputEncoding = THREE.sRGBEncoding
   * 
   * outputEncoding 已废弃 用 outputColorSpace
   * sRGBEncoding 已废弃 用 SRGBColorSpace
   */
  renderer.outputColorSpace = THREE.SRGBColorSpace
  // 设置渲染器尺寸
  renderer.setSize(window.innerWidth, window.innerHeight)

  // 监听屏幕大小改变，修改渲染器的宽高，相机的比例
  window.addEventListener('resize', () => {
    // 更新摄像头
    camera.aspect = window.innerWidth / window.innerHeight
    // 更新摄像头的头部矩阵
    camera.updateProjectionMatrix()
    // 更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // 将webgl渲染的canvas内容添加到body上
  document.body.appendChild(renderer.domElement)

  // 设置渲染函数
  const render = () => {
    // 渲染场景
    renderer.render(scene, camera);
    // 引擎自动更新渲染器
    requestAnimationFrame(render);
  }
  render()

  // 实例化控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  // 设置阻尼
  controls.enableDamping = true



  return {
    renderer,
    render,
    scene
  }

}


export default initFun