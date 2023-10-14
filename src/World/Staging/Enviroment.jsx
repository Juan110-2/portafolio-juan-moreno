import { Cloud, Sky, Sparkles, Stars } from "@react-three/drei"

const Environments = () => {
    return (
        <>
            <Stars
            radius={100}
            depth={50}
            count={10000}  // Aumenta la cantidad de estrellas
            factor={2}
            saturation={0.2}  // Reduce la saturación
            />
            
            <Sky
            sunPosition={[0, 0, -1]} // Coloca el sol debajo del horizonte
            inclination={0}  // Ajusta la inclinación para simular una escena nocturna
            azimuth={180}     // Ajusta el ángulo de azimut para la dirección de la luz
            mieCoefficient={0.005}
            elevation={0}  // Ajusta la elevación del sol
            mieDirectionalG={0.07}
            rayleigh={3}
            turbidity={10}
            exposure={0.1}  // Reduce la exposición para hacerlo más oscuro
            />

            <Sparkles
                color="orange" 
                count={100}
                size={4}
                fade={false}
                speed={0.5}
                scale={10} 
            />
            {/* <Cloud
                opacity={0.5}
                speed={0.4} // Rotation speed
                width={50} // Width of the full cloud
                depth={5} // Z-dir depth
                segments={20} // Number of particles
                position-y={20} // Y position
            /> */}
        </>
    )
}
export default Environments;