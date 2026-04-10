import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useEffect, useState } from 'react'

export function GradienBackground({ onLoad }: { onLoad?: () => void }) {
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    const cores = navigator.hardwareConcurrency ?? 4
    const memory = (navigator as any).deviceMemory ?? 4

    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
    const renderer = gl?.getParameter(gl.RENDERER) as string ?? ''
    const isSoftwareRenderer = /swiftshader|llvmpipe|software/i.test(renderer)

    const isLowEnd = cores <= 6 || memory <= 2 || isSoftwareRenderer
    setIsLowEnd(isLowEnd)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoad?.()
    }, 1500)
    return () => clearTimeout(timer)
  }, [onLoad])

  if (isLowEnd) {
    return (
      <div style={{
        position: 'fixed', inset: 0, zIndex: -1,
        background: 'var(--color-background)'
      }} />
    )
  }

  return (
    <ShaderGradientCanvas
      style={{ position: 'fixed', inset: 0, zIndex: -1 }}
      pixelDensity={1.5}
      fov={45}
    >
      <ShaderGradient
        animate="on"
        brightness={1}
        cAzimuthAngle={270}
        cDistance={0.5}
        cPolarAngle={180}
        cameraZoom={15.1}
        color1="#1c1c1c"
        color2="#E33E3C"
        color3="#1c1c1c"
        envPreset="city"
        grain="on"
        lightType="env"
        positionX={-0.1}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.4}
        rotationX={0}
        rotationY={130}
        rotationZ={70}
        shader="defaults"
        type="sphere"
        uAmplitude={3.2}
        uDensity={0.8}
        uFrequency={5.5}
        uSpeed={0.3}
        uStrength={0.3}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  )
}