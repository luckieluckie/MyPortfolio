import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import React, { useRef } from 'react'

const Target = (props) => {

  const targetRef = useRef();
  const { scene } = useGLTF('models/c-logo.glb');

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <mesh {...props} ref={targetRef} rotation={[0, 0, 0]} scale={0.05}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Target