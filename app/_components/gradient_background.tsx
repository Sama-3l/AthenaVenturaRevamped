import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'

function GradientReadyDetector({ onReady }: { onReady: () => void }) {
  const called = useRef(false)

  useFrame(() => {
    if (!called.current) {
      called.current = true
      onReady()
    }
  })

  return null
}

export function GradienBackground({ onLoad }: { onLoad?: () => void }) {
    useEffect(() => {
    const timer = setTimeout(() => {
      onLoad?.()
    }, 1500) // give the WebGL context 1.5s to initialize

    return () => clearTimeout(timer)
  }, [onLoad])

  const [cameraZoom, setCameraZoom] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 640 ? 9 : 15.1
  )

  useEffect(() => {
    const handleResize = () => {
      setCameraZoom(window.innerWidth <= 640 ? 10 : 15.1)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
        cameraZoom={cameraZoom}
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