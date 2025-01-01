import ImagenRestaurante1 from "../assets/images/rest1.avif";
import "./RestauranteItem1Styles.css";
const RestauranteItem1 = () => {
  const text =
    "Ubicado en el centro histórico de la ciudad, La Raíz representa nuestro primer local familiar. Este restaurante rinde homenaje a las recetas tradicionales de nuestros abuelos, con un ambiente cálido y acogedor que transporta a los comensales a los orígenes de nuestra cocina, Concepto: Cocina tradicional con alma contemporánea. Un espacio donde los sabores clásicos se encuentran con técnicas modernas de preparación. Cada plato cuenta una historia de herencia familiar, con ingredientes locales y recetas transmitidas por generaciones, Ambiente: Decoración rústica con elementos vintage, maderas cálidas, fotografías familiares y utensilios de cocina antiguos que decoran las paredes. Música suave de fondo que recrea la atmósfera de una cocina tradicional.";
  return (
    <div className="rest-item d-flex flex-wrap justify-content-around align-items-center pb-5 w-100 ">
      <div className=" texto1 d-flex flex-wrap flex-column justify-content-center align-items-center col-12 col-xl-6">
        <article className="texto d-flex flex-column align-items-center text-align-center ">
          <h2 style={{ color: "white" }} className="pb-5">
            LA RAIZ
          </h2>

          <p>{text}</p>
        </article>
        <div className="botones d-flex text-align-center flex-column ">
          <a href="/Reservas">
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
      <div className="imagen1 py-5 px-5 d-flex flex-wrap">
        <img src={ImagenRestaurante1} alt="imagen-restaurante1"></img>
      </div>
    </div>
  );
};

export default RestauranteItem1;
