import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Dragon from "./Models/Dragon";
import { Silla } from "./Models/Silla";
import { Sword } from "./Models/Sword";
import Text from "./3DText/Text";
import { Physics, RigidBody } from "@react-three/rapier";

const DragonScene = ({ show, setShow }) => {
    const boxRef = useRef();
    const sphereRef = useRef();
    const coneRef = useRef();
    const torusRef = useRef();
    let time = 0;

    useFrame((state, delta) => {
        time += delta;
        boxRef.current.rotation.x += 1 * delta;
        sphereRef.current.rotation.x += 1 * delta;
        coneRef.current.rotation.x += 1 * delta;
        torusRef.current.rotation.x += 1 * delta;
        coneRef.current.position.x = -20;
        boxRef.current.position.x = -10;
        sphereRef.current.position.x = 10;
        torusRef.current.position.x = 20;

        coneRef.current.position.y = Math.sin(time) * 5;
        sphereRef.current.position.y = Math.cos(time) * 5;
        torusRef.current.position.y = Math.sin(time) * 5;
        boxRef.current.position.y = Math.cos(time) * 5;
    });

    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Dragon />
            <Physics>
                <Sword show={show} onClick={() => setShow(!show)} />
                <RigidBody type="fixed">
                    <mesh rotation-x={-Math.PI / 2} position-y={-2}>
                        <planeGeometry args={[10, 10, 10, 10]} />
                        <meshStandardMaterial color="#e4f0f8" />
                    </mesh>
                </RigidBody>
            </Physics>
            <Silla />
            <mesh position-z={-30} ref={boxRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="purple" />
            </mesh>
            <mesh position-z={-30} ref={sphereRef} scale={[1, 1, 1]}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshStandardMaterial color="red" />
            </mesh>
            <mesh position-z={-30} ref={coneRef} scale={[1, 1, 1]}>
                <coneGeometry args={[1, 2, 32]} />
                <meshLambertMaterial color="blue" />
            </mesh>
            <mesh position-z={-30} ref={torusRef} scale={[0.9, 0.9, 0.9]}>
                <torusGeometry args={[1.5, 1, 10, 50]} />
                <meshPhysicalMaterial color="yellow" />
            </mesh>
            <Text text={`  Welcome to\n\nJuan's Villa`} />
        </>
    );
}

export default DragonScene;

