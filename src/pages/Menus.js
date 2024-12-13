import Header from "../components/Header";
import Titulo from "../components/Titulo";
import ImgMenuGrupo1 from "../assets/images/img-menu-grupo1.avif";
import ImgMenuGrupo2 from "../assets/images/img-menu-grupo2.avif";
import "./MenusStyles.css";
import Footer from "../components/Footer";

const MenusGrupos = () => {
  return (
    <div style={{ backgroundColor: "#222422"  }}>
      <Header></Header>
      <Titulo>MENUS DE GRUPOS</Titulo>
      <section className="grupo1 d-flex justify-content-around  align-items-center flex-wrap pb-5">
        <img src={ImgMenuGrupo1}></img>
        <div className="lista1 d-flex flex-column align-items-center flex-wrap">
          <h3>MENU GRUPOS 1</h3>
          <ul className="menu-grupo1">
            PRIMEROS
            <hr style={{ color: "white" }}></hr>
            <li>Plato 1</li>
            <li>Plato 2</li>
            <li>Plato 3</li>
          </ul>
          <ul className="menu-grupo1">
            SEGUNDOS
            <hr style={{ color: "white" }}></hr>
            <li>Plato 1</li>
            <li>Plato 2</li>
            <li>Plato 3</li>
          </ul>
          <ul className="menu-grupo1">
            POSTRES
            <hr style={{ color: "white" }}></hr>
            <li>Postre 1</li>
            <li>Postre 2</li>
            <li>Postre 3</li>
          </ul>
          <a href="/reservas">
            <button
              className="btn btn-secondary mt-5 mb-5 btn-lg"
              type="button"
            >
              RESERVAR
            </button>
          </a>
        </div>
      </section>

      <section className="grupo1 d-flex justify-content-around align-items-center flex-wrap pt-5">
        <div className="lista1 d-flex flex-column align-items-center flex-wrap">
          <h3>MENU GRUPO 2</h3>
          <ul className="menu-grupo1">
            PRIMEROS
            <hr style={{ color: "white" }}></hr>
            <li>Plato 1</li>
            <li>Plato 2</li>
            <li>Plato 3</li>
          </ul>
          <ul className="menu-grupo1">
            SEGUNDOS
            <hr style={{ color: "white" }}></hr>
            <li>Plato 1</li>
            <li>Plato 2</li>
            <li>Plato 3</li>
          </ul>
          <ul className="menu-grupo1">
            POSTRES
            <hr style={{ color: "white" }}></hr>
            <li>Postre 1</li>
            <li>Postre 2</li>
            <li>Postre 3</li>
          </ul>
          <a href="/reservas">
            <button
              className="btn btn-secondary mt-5 mb-5 btn-lg"
              type="button"
            >
              RESERVAR
            </button>
          </a>
        </div>
        <img src={ImgMenuGrupo2}></img>
      </section>
      <hr style={{ color: "white", width: "75%", marginLeft: "200px" }}></hr>
      <Footer></Footer>
    </div>
  );
};
export default MenusGrupos;
