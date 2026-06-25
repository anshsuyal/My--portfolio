import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Mesh } from 'three'

function Core() {
  const mesh = useRef<Mesh>(null)
  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y += delta * 0.1
    mesh.current.rotation.x += delta * 0.05
    const t = state.clock.getElapsedTime()
    mesh.current.position.y = Math.sin(t * 0.5) * 0.1
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} scale={1.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#6366f1"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.2}
          roughness={0.1}
          opacity={0.3}
          transparent
        />
      </mesh>
    </Float>
  )
}

export function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
        <Suspense fallback={null}>
          <Core />
          <Sparkles count={40} scale={10} size={1.5} speed={0.2} color="#6366f1" />
        </Suspense>
      </Canvas>
    </div>
  )
}
