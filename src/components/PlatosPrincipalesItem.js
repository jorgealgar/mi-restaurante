const PlatosPrincipalesItem = ({ img, txt }) => {
    return (
      <div
        style={{ width: "250px" }}
        className="platos-ppales  d-flex justify-content-around align-items-center flex-column img-fluid flex-wrap"
      >
        <img style={{ width: "350px" }} src={img} alt="imagen-postre"></img>
        <p className="pt-5">{txt}</p>
      </div>
    );
  };
  
  export default PlatosPrincipalesItem ;