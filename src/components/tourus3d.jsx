import React, {  useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Tourus(props){
    const ref=useRef(null)
     useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.01))
  
    return(
      <mesh visible position={[0, 0, 0]} castShadow ref={ref}>
          <directionalLight position={[0,5,0]}/>
      <ambientLight/>
      <torusGeometry args={[10, 3, 16, 100 ]}/>
       <meshStandardMaterial attach="material" color={props.colors} />


    </mesh>
    )
  }
  
  