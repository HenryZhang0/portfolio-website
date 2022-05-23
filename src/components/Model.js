import React, {Suspense} from 'react'
import {useRef, useState} from 'react'
import { Canvas } from "react-three-fiber";
import { useGLTF } from '@react-three/drei'
//import { Physics, usePlane, useBox } from "use-cannon";
//import "./styles.css";

function Pizza({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('https://github.com/HenryZhang0/portfolio-website/blob/master/src/components/pizza.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[4.76, 16.96, 36.16]}>
              <mesh geometry={nodes.CHEESE_Mat3_0.geometry} material={materials['Mat.3']} />
            </group>
            <group position={[4.54, -12.23, -11.57]}>
              <mesh geometry={nodes.CHEESE_2_Mat1_0.geometry} material={materials['Mat.1']} />
            </group>
            <group position={[4.74, -8.31, 1.4]}>
              <mesh geometry={nodes.BREAD_Mat_0.geometry} material={materials.material} />
            </group>
            <group position={[-18.11, 13.96, 11.39]}>
              <mesh geometry={nodes.PEPPERONI_Mat2_0.geometry} material={materials['Mat.2']} />
            </group>
            <group position={[18.11, 3.49, -11.64]}>
              <mesh geometry={nodes.PEPPERONI_2_Mat2_0.geometry} material={materials['Mat.2']} />
            </group>
            <group position={[-3.98, -16.96, -36.16]}>
              <mesh geometry={nodes.PEPPERONI_3_Mat2_0.geometry} material={materials['Mat.2']} />
            </group>
          </group>
        </group>
      </group>
    )
  }
  

const Model = () => {
    const ref=useRef();
    useGLTF.preload('/pizza.gltf')
    return (
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight />
                <Pizza/>
            </Suspense>
        </Canvas>
    )
}

export default Model