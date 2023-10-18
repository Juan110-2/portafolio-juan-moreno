import { OrbitControls } from "@react-three/drei";
import DragonScene from "./World/Scenes/Dragon/DragonScene";
import  Lights  from "./World/Staging/Lights";
import  Environments  from "./World/Staging/Enviroment";

const Experience = ({ show, setShow }) => {

    return (
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.5} />
            <Lights />
            <Environments />
            <DragonScene show={show} setShow={setShow} />
        </>
    );
}

export default Experience;

