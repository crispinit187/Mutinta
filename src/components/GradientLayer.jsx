import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

// The live 3D water-plane background. Loaded lazily (see Background.jsx) because it
// pulls in three.js, the heaviest part of the site.
export default function GradientLayer({ animate }) {
  return (
    <ShaderGradientCanvas
      pixelDensity={1} // 1 keeps it light on phones
      fov={45}
      pointerEvents="none"
      style={{ position: 'absolute', inset: 0 }}
    >
      <ShaderGradient
        control="props"
        type="waterPlane"
        animate={animate}
        uTime={0.2}
        uSpeed={0.1}
        uStrength={2.4}
        uDensity={1.1}
        uFrequency={5.5}
        uAmplitude={0}
        range="disabled"
        rangeStart={0}
        rangeEnd={40}
        color1="#5606ff"
        color2="#fe8989"
        color3="#000000"
        bgColor1="#000000"
        bgColor2="#000000"
        brightness={1.1}
        reflection={0.1}
        lightType="3d"
        envPreset="city"
        grain="off"
        cAzimuthAngle={180}
        cPolarAngle={115}
        cDistance={3.9}
        cameraZoom={1}
        positionX={-0.5}
        positionY={0.1}
        positionZ={0}
        rotationX={0}
        rotationY={0}
        rotationZ={235}
        axesHelper="off"
        gizmoHelper="hide"
        wireframe={false}
      />
    </ShaderGradientCanvas>
  )
}
