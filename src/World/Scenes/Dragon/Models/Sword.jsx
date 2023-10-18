import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Sword(props, { show }) {
  const swordRef = useRef();
  const swordModel = useGLTF("/assets/models/sword/sword.glb");
  const { nodes, materials, animations } = swordModel;

  const { actions } = useAnimations(animations, swordRef);

  const [play, setPlay] = useState(false);
  const [hitSound] = useState(() => new Audio("assets/sound/sword_sound.wav"));

  const onHandleSphere = () => {
    swordRef.current.applyImpulse(
      {
        x: 1.0,
        y: 0,
        z: 0,
      },
      true
    );

    swordRef.current.addForce(
      {
        x: 1.0,
        y: 0,
        z: 0,
      },
      true
    );
  };

  useEffect(() => {
    if (play) {
      hitSound.currentTime = 0;
      hitSound.volume = Math.random();
      hitSound.play();
    }
  }, [play]);

  useEffect(() => {
    swordRef.current.sleep();
  }, []);

  return (
    <RigidBody
    ref={swordRef}
    colliders={"ball"}
    friction={0}
    restitution={0}
    onCollisionEnter={() => setPlay(true)}
    onCollisionExit={() => setPlay(false)}
  >
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
          onClick={onHandleSphere}
        />
      </group>
    </group>

    </RigidBody>
  );
}

useGLTF.preload("/assets/models/sword/sword.glb");

export default Sword;