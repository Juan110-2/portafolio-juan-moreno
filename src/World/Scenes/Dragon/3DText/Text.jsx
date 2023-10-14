import { Center, Float, Text3D } from "@react-three/drei"

const Text = ({ text }) => {
    return (
        <Center
            position-y={3}
            position-x={-6}
        >
            <Float
                speed={2}
                rotationIntensity={1.5}
                floatIntensity={1.5}
            >
                <Text3D
                    font={"/assets/fonts/Open_Sans_Italic.json"}
                    bevelEnabled
                    bevelSize={0.01}
                    bevelThickness={0.1}
                    height={0.1}
                    lineHeight={0.5}
                    letterSpacing={0.05}
                    size={0.25}
                >
                    {text}
                    <meshNormalMaterial />
                </Text3D>
            </Float>
        </Center>
    )
}

export default Text;