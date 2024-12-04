import ImagenRestaurante2 from "../assets/images/rest2.avif"


const RestauranteItem2 = ()=>{
    const text =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words";
    return(
        <div className="rest-item d-flex justify-content-center w-100 align-content-around py-5 px-5 pb-5">
        
        <div className="d-flex w-100 pl-5 flex-wrap">
          <img src={ImagenRestaurante2} alt="imagen-restaurante1"></img>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <article className="texto d-flex flex-column align-items-center text-align-center w-50">
            <h2 style={{ color: "white" }} className="pb-5">
              Restaurante 2
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