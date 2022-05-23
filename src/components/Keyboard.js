

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, Canvas, useLoader, ShaderMaterial } from "react-three-fiber";

export default function Model({ ...props }) {

  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });

  const group = useRef()
  const { nodes, materials } = useGLTF('/keyboard.gltf')
  return (
    <mesh ref={myMesh}>

    <group ref={group} {...props} dispose={null} scale = {0.005} rotation={[Math.PI / 2, Math.PI / 400000, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-402.04, 128.76, -130.53]} rotation={[-Math.PI / 2, 0, 0]} scale={[15.94, 17.34, 9.05]}>
            <mesh geometry={nodes.Balanco_Balanco_0.geometry} material={materials.Balanco} />
          </group>
          <group position={[-229.35, 130.44, -213.63]} rotation={[-Math.PI / 2, 0, 0.07]} scale={13.49}>
            <mesh geometry={nodes.Volume_Volumes_0.geometry} material={materials.Volumes} />
          </group>
          <group position={[287.58, 118.21, -91.36]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Configuracao_Configuracao_0.geometry} material={materials.Configuracao} />
          </group>
          <group position={[230.07, 118.21, -91.53]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Pad_Teclas_Pad_0.geometry} material={materials.Teclas_Pad} />
          </group>
          <group position={[254.32, 73.87, -17.47]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Teclas_Pretas_Teclas_Pretas_0.geometry} material={materials.Teclas_Pretas} />
          </group>
          <group position={[-394.44, 60.28, -17.48]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Teclas_Brancas_Teclas_Brancas_0.geometry} material={materials.Teclas_Brancas} />
          </group>
          <group position={[-30.47, 72.42, -30.72]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Caixa_Caixa_0.geometry} material={materials.Caixa} />
          </group>
        </group>
      </group>
    </group>
    </mesh>
  )
}

useGLTF.preload('/keyboard.gltf')
