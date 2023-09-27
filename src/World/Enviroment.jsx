import { Cloud, Sky, Sparkles, Stars } from "@react-three/drei"

const Environments = () => {
    return (
        <>
            <Stars
                radius={100} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={2} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
            />
            <Sky
                sunPosition={[0, 0, -1]} // Places the sun below the horizon
                inclination={0.2} // Adjusts the tilt to simulate sunset
                azimuth={180} // Adjusts the azimuth angle to change the direction of the light
                mieCoefficient={0.005} // Adjusts the atmospheric scattering
                elevation={5} // Adjusts the elevation of the sun
                mieDirectionalG={0.07} // Adjusts the brightness of the sun
                rayleigh={3} // Adjusts the Rayleigh scattering
                turbidity={10} // Adjusts the clarity of the sky]
                exposure={0.5} // Adjusts the overall exposure
            />
            <Sparkles
                color="rose" 
                count={100}
                size={4}
                fade={false}
                speed={0.5}
                scale={6} 
            />
            <Cloud
                opacity={0.5}
                speed={0.4} // Rotation speed
                width={50} // Width of the full cloud
                depth={5} // Z-dir depth
                segments={20} // Number of particles
                position-y={20} // Y position
            />
        </>
    )
}
export default Environments;