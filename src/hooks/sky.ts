import { Scene } from "three";

const skyFun = (THREE: typeof import("three"), scene: Scene) => {
  // 创建一个巨大的天空球体
  const skyGeometry = new THREE.SphereGeometry(1000, 60, 40);
  // 加载天空纹理
  const texture = new THREE.TextureLoader().load('/src/assets/textures/sky.jpg')
  const skyMaterial = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(skyGeometry, skyMaterial);
  // 进入内部 反过来 或者设置side: THREE.DoubleSide 也可以
  sphere.geometry.scale(1, 1, -1)
  scene.add(sphere);

  // 创建视频的纹理
  const video = document.createElement("video");
  video.src = '/src/assets/textures/sky.mp4'
  video.loop = true;

  // 目前浏览器禁止自动播放，所以设置一些小交互让视频自动播放，比如鼠标点击事件
  window.addEventListener("touchstart", () => {
    // 判断视频是否处于播放状态
    if (video.paused) {
      // 当鼠标移动的时候播放视频
      video.play()
      // 天空材质
      skyMaterial.map = new THREE.VideoTexture(video)
      // 自动更新
      skyMaterial.map.needsUpdate = true
    }
  }, { passive: true })
}

export default skyFun