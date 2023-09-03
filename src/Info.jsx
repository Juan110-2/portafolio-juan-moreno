import { Html } from "@react-three/drei";

const Info = ({ name, biography }) => {
    return (
        <Html>
        <div className="info-container">
          <h1 className="info-title">{name}</h1>
          <p className="info-biography">{biography}</p>
        </div>
      </Html>
    );
}


export default Info;
