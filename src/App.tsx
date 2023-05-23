import { useRef, useEffect } from 'react'
// 导入three.js
import * as THREE from 'three'

import './App.css'
import initFun from './hooks/init'
import skyFun from './hooks/sky'
import waterFun from './hooks/water'
import landFun from './hooks/land'
import envFun from './hooks/env'

function App() {
  const { renderer, render, scene } = initFun(THREE)
  skyFun(THREE, scene)
  waterFun(THREE, scene)
  landFun(scene)
  envFun(THREE, scene)

  // 初始化dom
  const containerRef = useRef<HTMLDivElement>(null); // 通过泛型指定 `containerRef` 是一个 `HTMLDivElement`
  // 挂载完毕后获取dom 
  useEffect(() => {
    if (!containerRef.current) {
      throw new Error("containerRef.current is not valid");
    }
    containerRef.current?.appendChild(renderer.domElement)

    // 调用渲染函数
    render()
  }, [])


  return (
    <>
      {/* <div> */}
      {/* 初始化dom */}
      <div className="container" ref={containerRef}></div>
      {/* </div> */}
    </>
  )
}

export default App
