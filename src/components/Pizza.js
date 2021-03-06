/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Leo Isidro (https://sketchfab.com/leo.isidro3)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pizza-5b19b3bb03ed4a0c846f208b708bf24c
title: PIZZA
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import p from '../pizza.gltf'

export default function Model({ ...props }) {

  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });

  const group = useRef()
  const { nodes, materials } = useGLTF(p)
  return (
    <mesh ref={myMesh} position={[0, 0, -0]}>

    <group ref={group} {...props} dispose={null} scale={0.04} rotation={[-Math.PI / 1.6, 0, Math.PI]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[4.76, 16.96, 36.16]}>
            <mesh geometry={nodes.CHEESE_Mat3_0.geometry} material={materials['Mat.3']}  material-color = {"#FAD02C"}/>
          </group>
          <group position={[4.54, -12.23, -11.57]}>
            <mesh geometry={nodes.CHEESE_2_Mat1_0.geometry} material={materials['Mat.3']} material-color = {"#FAD02C"} />
          </group>
          <group position={[4.74, -8.31, 1.4]}>
            <mesh geometry={nodes.BREAD_Mat_0.geometry} material={materials.material} />
          </group>
          <group position={[-18.11, 13.96, 11.39]}>
            <mesh geometry={nodes.PEPPERONI_Mat2_0.geometry} material={materials['Mat.2']}  material-color = {"#FF0000"}/>
          </group>
          <group position={[18.11, 3.49, -11.64]}>
            <mesh geometry={nodes.PEPPERONI_2_Mat2_0.geometry} material={materials['Mat.2']} material-color = {"#FF0000"} />
          </group>
          <group position={[-3.98, -16.96, -36.16]}>
            <mesh geometry={nodes.PEPPERONI_3_Mat2_0.geometry} material={materials['Mat.2']} material-color = {"#FF0000"} />
          </group>
        </group>
      </group>
    </group>
    </mesh>
  )
}

useGLTF.preload('/pizza.gltf')
