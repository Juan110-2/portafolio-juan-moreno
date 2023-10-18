import "./info.css";
const Info = ({ name, biography, show }) => {

  return (

    !show ? (
      <div className="container-info">
         <div className="container-info">
             <div className="card-info">
                 <h1 className="name">{name}</h1>
                 <span className="biography">{biography}</span>
             </div>
         </div>
      </div>
    ) : null
  );
};

export default Info;