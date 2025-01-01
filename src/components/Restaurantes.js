import "./RestaurantesStyles.css";

function Restaurantes({ restaurantes }) {
  return restaurantes.map((rest) => {
    if (rest.invertido) {
      return (
        <div
          key={restaurantes}
          className="d-flex flex-wrap align-items-center justify-content-around flex-row px-5 pt-5 restaurante2"
        >
          <div className=" texto2 d-flex flex-column align-items-center justify-content-center px-5 col-xl-6 col-12">
            <h4 style={{ color: "aliceblue" }}>FUEGO NUEVO</h4>
            <p>{rest.descripcion}</p>
            <a href="/nuestrosrestaurantes">
              <button
                type="button"
                className="btn btn-secondary mt-3 mb-5 btn-lg"
              >
                MAS INFO
              </button>
            </a>
          </div>
          <div className="imagen2">
            <img src={rest.img}></img>
          </div>
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-wrap align-items-center flex-row px-5 pb-5 text-center justify-content-around restaurante1">
          <div className="imagen">
            <img src={rest.img}></img>
          </div>

          <div className="texto d-flex flex-column align-items-center justify-content-center px-5 col-xl-6 col-12">
            <h4 style={{ color: "aliceblue" }}>LA RAIZ</h4>
            <p>{rest.descripcion}</p>
            <a href="/nuestrosrestaurantes">
              <button
                type="button"
                className="btn btn-secondary mt-3 mb-5 btn-lg"
              >
                MAS INFO
              </button>
            </a>
          </div>
        </div>
      );
    }
  });
}

export default Restaurantes;
