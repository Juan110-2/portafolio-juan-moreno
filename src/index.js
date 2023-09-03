import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import Info  from "./Info";
import { Canvas } from "@react-three/fiber"
import "./styles.css";



const root = createRoot(document.getElementById('root'));


root.render(
    <Canvas camera={{ position: [2, 0, 5] }}>
        <Experience />
        <Info name={"Juan José Moreno Jaramillo"} biography={"Hijo, nieto, hermano, estudiante."}/>
    </Canvas>
);

const Portfolio = () => {

    return (<div>
        <Menu />
        <Experience />
        <Info />
    </div>
    );
}
