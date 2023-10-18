import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Sword(props, { show }) {
  const swordRef = useRef();
  const swordModel = useGLTF("/assets/models/sword/sword.glb");
  const { nodes, materials, animations } = swordModel;

  const { actions } = useAnimations(animations, swordRef);

  return (
    <group {...props} dispose={null}>
      <group position={[-0.678, 0, -0.002]} rotation={[-Math.PI / 2, 0, 3.135]}>
        <mesh
        //   show={show} onClick={() => setShow(!show)} 
          castShadow
          receiveShadow
          geometry={nodes.exported1pCube65_lambert2_0.geometry}
          material={materials.lambert2}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.10, 0.20, 0.10]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/sword/sword.glb");

export default Sword;