import React, { Suspense } from 'react'
import { useRef, useState, useEffect } from 'react'
import { useFrame, Canvas, useLoader, ShaderMaterial } from "react-three-fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, useGLTF } from '@react-three/drei'
import Pizza from './Pizza.js'
import Portalgun from './Portalgun.js'
import { EffectComposer, Bloom, SSAO, Glitch } from "react-postprocessing"
import { Color, Vector3 } from "three"
import { useControls } from 'leva'
import Hologram from "./Hologram.js";


const Model = ({ item }) => {
    const [rot, setRot] = useState(0);
    const [counter, setCounter] = useState(0);

    return (
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight />
                <spotLight intensity={6} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow={false} />
                <mesh rotation={[-0.1,0,0]} scale={0.8} position={[0,0.25,0]}>


                    {item}
                    <Hologram/>
                </mesh>
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} enableDamping={true} />
            </Suspense>
        </Canvas>
    )
}

export default Model