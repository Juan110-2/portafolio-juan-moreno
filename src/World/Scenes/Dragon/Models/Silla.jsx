
import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

export function Silla(props) {
    const { nodes, materials } = useGLTF("/assets/models/silla/silla.glb");
    const PATH = "/assets/textures/wood/"

    const propsTextures = useTexture({
        map: PATH + "wood_color.jpg",
        // displacementMap: PATH + "wood_height.jpg",
        roughnessMap: PATH + "wood_roughness.jpg",
        aoMap: PATH + "wood_ao.jpg",
        normalMap: PATH + "wood_normal.jpg",
    })
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        // castShadow
                        // receiveShadow
                        geometry={nodes.Object_4.geometry}
                        // material={materials.Material}
                        position={[-3, -1, 3]}
                        rotation={[-Math.PI, 1, 0]}
                        scale={[0.5, 0.033, 0.5]}
                    >
                        <meshStandardMaterial {...propsTextures} />
                    </mesh>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/silla/silla.glb");
