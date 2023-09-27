import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"

const App = () => {
    // Camera settings
    const cameraSettings = {
        position: [2, 2, 8],
        fov: 60
    }

    return (
        <>
            <Info name={"Juan Moreno"} biography={"Web 3D Developer"} />
            <Canvas
            shadows
                camera={cameraSettings}
            >
                <Experience />
            </Canvas>
        </>
    )
}
export default App