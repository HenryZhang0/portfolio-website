import React, { Suspense } from 'react'
import { useRef, useState, useEffect } from 'react'
import { useFrame, Canvas, useLoader, ShaderMaterial, extend } from "react-three-fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Effects, OrbitControls, useGLTF } from '@react-three/drei'
import Pizza from './Pizza.js'
import Portalgun from './Portalgun.js'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, Grid } from '@react-three/postprocessing'
import { Color, Vector3 } from "three"
import { useControls } from 'leva'
import Hologram from "./Hologram.js";
import { KernelSize } from 'postprocessing'

import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass"

extend({ ShaderPass, GlitchPass })

const Model = ({ item }) => {
    const [rot, setRot] = useState(0);
    const [counter, setCounter] = useState(0);

    return (
        <>
            
            <div className="holo-projector" style={{ height: "70vh" }}>
                <Canvas>
                    <Effects>
                        {/* <shaderPass attachArray="passes" strength={1} radius={0.1}/> */}
                        {/* <glitchPass attachArray="passes" /> */}
                    </Effects>
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={6} angle={0.1} penumbra={1} position={[0, 10, -15]} castShadow={true} />                        
                        <mesh rotation={[-0.1, 0, 0]} scale={0.8} position={[0, 0.25, 0]}>
                            <Hologram />
                        </mesh>
                    </Suspense>
                </Canvas >
            </div>
            <div className="holo-model" style={{ height: "70vh" }}>
                <Canvas>
                    <Effects>
                        {/* <shaderPass attachArray="passes" strength={1} radius={0.1}/> */}
                        {/* <glitchPass attachArray="passes" /> */}
                    </Effects>
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={6} angle={0.1} penumbra={1} position={[0, 10, -15]} castShadow={true} />
                        <mesh rotation={[-0.1, 0, 0]} scale={0.8} position={[0, 0.25, 0]}>
                            {item}
                        </mesh>
                        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} enableDamping={false} />

                    </Suspense>
                    <EffectComposer>
                        {/* <DepthOfField focusDistance={0.25} focalLength={0.002} bokehScale={2} height={480} /> */}
                        <Bloom luminanceThreshold={0} luminanceSmoothing={0.4} height={300} intensity={0.6}/>
                        <Noise opacity={0.02} />
                        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
                        <Grid />
                    </EffectComposer>
                </Canvas >
            </div>
        </>
    )
}

export default Model