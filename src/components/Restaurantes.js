import "./RestaurantesStyles.css";

function Restaurantes({ restaurantes }) {
  return restaurantes.map((rest) => {
    if (rest.invertido) {
      return (
        <div className="d-flex align-items-center justify-content-around flex-row px-5 restaurante2">
          <div className="d-flex flex-column align-items-center justify-content-center px-5">
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
          <img src={rest.img}></img>
        </div>
      );
    } else {
      return (
        <div className="d-flex align-items-center flex-row px-5 text-center restaurante1">
          <img src={rest.img}></img>
          <div className="d-flex flex-column align-items-center justify-content-center px-5">
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
