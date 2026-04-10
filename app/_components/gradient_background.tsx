import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useRef, useEffect, useState } from 'react'

export function GradienBackground({ onLoad }: { onLoad?: () => void }) {
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    let frames = 0
    const start = performance.now()

    const check = () => {
      frames++
      console.log(frames);
      const elapsed = performance.now() - start
      console.log(elapsed);
      if (elapsed >= 500) {
        if ((frames / elapsed) * 1000 < 10) setIsLowEnd(true)
        return
      }
      requestAnimationFrame(check)
    }

    requestAnimationFrame(check)
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
        grain={"on"}
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