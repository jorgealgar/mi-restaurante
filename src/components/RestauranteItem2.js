import ImagenRestaurante2 from "../assets/images/rest2.avif"


const RestauranteItem2 = ()=>{
    const text =
    "Situado en la zona moderna de la ciudad, Fuego Nuevo representa nuestra visión más innovadora y contemporánea. Un espacio que desafía los límites culinarios, mezclando técnicas tradicionales con influencias internacionales.Concepto: Cocina de fusión que experimenta con sabores globales manteniendo la esencia de nuestra cocina local. Un laboratorio gastronómico donde cada plato es una obra de arte culinaria que desafía las expectativas tradicionales.Ambiente: Diseño industrial moderno, con cocina abierta que permite a los comensales observar la preparación de los platos. Tonos metálicos, iluminación tenue, y un bar de cócteles que complementa la experiencia gastronómica.";
    return(
        <div className="rest-item d-flex justify-content-center w-100 align-content-around py-5 px-5 pb-5">
        
        <div className="d-flex w-100 pl-5 flex-wrap">
          <img src={ImagenRestaurante2} alt="imagen-restaurante1"></img>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <article className="texto d-flex flex-column align-items-center text-align-center w-50">
            <h2 style={{ color: "white" }} className="pb-5">
              FUEGO NUEVO
            </h2>
  
            <p>{text}</p>
          </article>
          <div className="botones d-flex text-align-center flex-column ">
            <a href="/Reservas">
              {" "}
              <button type="button" className="btn btn-secondary mt-3  btn-lg">
                RESERVA
              </button>
            </a>
            <a href="">
              <button
                type="button"
                className="btn btn-secondary mt-3 mb-5 btn-lg"
              >
                LLAMAR
              </button>
            </a>
          </div>
        </div>
      </div>

    )
}
export default RestauranteItem2;