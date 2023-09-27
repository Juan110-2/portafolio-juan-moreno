import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Lights = () => {
    const directionalLightRef = useRef();
    const spotLightRef = useRef();

    useFrame((state) => {
        spotLightRef.current.position.x =  Math.sin(state.clock.getElapsedTime()) * 1;
    })

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                ref={directionalLightRef}
                position={[10, 10, 5]}
                intensity={1}
                color={"white"}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-far={32}
                shadow-camera-left={-8}
                shadow-camera-right={8}
                shadow-camera-top={8}
                shadow-camera-bottom={-8}
            />
            <spotLight
                ref={spotLightRef}
                position={[0, 4, 2]}
                angle={Math.PI / 12}
                intensity={500}
                penumbra={1}
                color={"white"}
                distance={8}
            />
            <hemisphereLight
                intensity={5}
                color={"red"}
            />
        </>
    )
}

export default Lights;