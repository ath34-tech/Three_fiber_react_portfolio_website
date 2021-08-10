import React, {  useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Cyber from '../assets/cyber.jpg'
import Cyber2 from '../assets/cyber2.jpg'
import Cyber3 from '../assets/cyber3.jpg'
import Cyber4 from '../assets/cyber4.jpg'
import Cyber5 from '../assets/cyber5.jpg'
import Cyber6 from '../assets/cyber6.jpg'

export default function Box(props) {
    const mesh = useRef()
    useFrame(() => (mesh.current.rotation.x=mesh.current.rotation.y += 0.01))
    const loader=new THREE.TextureLoader()
    const base=loader.load(Cyber)
    const base2=loader.load(Cyber2)
    const base3=loader.load(Cyber3)
    const base4=loader.load(Cyber4)
    const base5=loader.load(Cyber5)
    const base6=loader.load(Cyber6)

    return (
      <mesh
        {...props}
        ref={mesh}
    
    >
        <boxGeometry args={[3, 3, 3]} />

        <meshBasicMaterial attachArray="material" map={base} />
  <meshBasicMaterial attachArray="material"  map={base2}/>
  <meshBasicMaterial attachArray="material"  map={base3}/>
  <meshBasicMaterial attachArray="material"  map={base4}/>
  <meshBasicMaterial attachArray="material" map={base5} />
  <meshBasicMaterial attachArray="material"  map={base6}/>
        </mesh>
    )
  }