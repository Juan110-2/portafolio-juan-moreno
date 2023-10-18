import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"
import { useState } from "react";

const App = () => {
    // Camera settings
    const cameraSettings = {
        position: [2, 2, 8],
        fov: 60
    }
    const [show, setShow] = useState(true);

    return (
        <>
            <Info
                name="Juan Moreno"
                biography="3D Developer"
                show={show}
            />
            <Canvas
                shadows
                camera={cameraSettings}
            >
                <Experience show={show} setShow={setShow} />
            </Canvas>
        </>
    )
}
export default App