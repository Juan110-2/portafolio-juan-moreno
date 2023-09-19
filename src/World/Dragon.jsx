import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

// const { useGLTF, useAnimations } = require("@react-three/drei") -> Otra manera de importar

const Dragon = () => {
    const dragonRef = useRef();
    const dragonModel = useGLTF('/assets/models/dragon/scene.gltf')
    const { animations } = dragonModel;
    const { actions } = useAnimations(animations, dragonRef);

    // console.log(Object.keys(actions));

       useEffect(() => {
           const action = actions['Object_0']
           action.play()
       }, [])

    return (
        <mesh ref={dragonRef} position-x={0}  position-y={16} rotation-y={-Math.PI * 0.15} scale={0.1}>
            <primitive object={dragonModel.scene} />
        </mesh>
    )
    
}

export default Dragon;
useGLTF.preload("/assets/models/dragon/scene.gltf");