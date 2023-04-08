import { Canvas } from "@react-three/fiber";
import React from "react";
import "./index.css";
import { MeshStandardMaterial } from "three";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls autoRotate={true}/>
        <mesh>
          <ambientLight intensity={1}/>
          <boxGeometry arg={[1, 1, 1]} />
          <meshStandardMaterial attach={"material"} color="red"/>
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
