import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function App() {

  return (
    <Canvas 
      camera={({
        position: [3,3,3]
      })}
    >
      <mesh>
        <OrbitControls />
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )

}

export default App
