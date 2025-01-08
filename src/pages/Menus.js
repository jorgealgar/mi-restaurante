import Header from "../components/Header";
import Titulo from "../components/Titulo";
import ImgMenuGrupo1 from "../assets/images/img-menu-grupo1.avif";
import ImgMenuGrupo2 from "../assets/images/img-menu-grupo2.avif";
import "./MenusStyles.css";
import Footer from "../components/Footer";
import Cookies from "../components/Cookies";

const MenusGrupos = () => {
  return (
    <div style={{ backgroundColor: "#222422" }}>
      <Header></Header>
      <Titulo>MENUS DE GRUPOS</Titulo>
      <section className="grupo1 d-flex justify-content-around  align-items-center flex-wrap pb-5 w-100">
        <div className="imagen-menu1">
          <img src={ImgMenuGrupo1}></img>
        </div>

        <div className="lista1 d-flex flex-column flex-wrap pt-5">
          <h3>MENU GRUPO "TRADICIÓN"</h3>
          <ul className="menu-grupo1 d-flex flex-column pt-3">
            PRIMEROS
            <hr style={{ color: "white" }}></hr>
            <li>Surtido de ibéricos con pan de cristal y tomate rallado</li>
            <li>Ensalada de burrata con tomates cherry y pesto casero</li>
            <li>Croquetas caseras de jamón ibérico (6 unidades)</li>
          </ul>
          <ul className="menu-grupo1">
            SEGUNDOS
            <hr style={{ color: "white" }}></hr>
            <li>Entrecot de ternera a la parrilla con patatas y pimientos</li>
            <li>Bacalao confitado con crema de ajo y espinacas salteadas</li>
            <li>Arroz meloso con setas de temporada y parmesano</li>
          </ul>
          <ul className="menu-grupo1">
            POSTRES
            <hr style={{ color: "white" }}></hr>
            <li>Tarta de queso casera con coulis de frutos rojos</li>
            <li>Brownie templado con helado de vainilla</li>
            <li>Tiramisú tradicional</li>
          </ul>
          <p><strong> Precio 50€</strong></p>
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

      <section className="grupo1 d-flex justify-content-around align-items-center flex-wrap pt-5 mt-5 w-100">
        <div className="lista1 d-flex flex-column flex-wrap">
          <h3>MENU GRUPO "CONTEMPORÁNEO"</h3>
          <ul className="menu-grupo1 d-flex flex-column pt-3">
            PRIMEROS
            <hr style={{ color: "white" }}></hr>
            <li>Tartar de atún con aguacate y wakame</li>
            <li>Carpaccio de ternera con rúcula y parmesano</li>
            <li>Humus de garbanzo con pita casera y crudités</li>
          </ul>
          <ul className="menu-grupo1">
            SEGUNDOS
            <hr style={{ color: "white" }}></hr>
            <li>Solomillo de cerdo con salsa de Pedro Ximénez</li>
            <li>Lubina a la plancha con verduras salteadas</li>
            <li>Risotto de boletus con trufa negra</li>
          </ul>
          <ul className="menu-grupo1">
            POSTRES
            <hr style={{ color: "white" }}></hr>
            <li>Coulant de chocolate con helado de frambuesa</li>
            <li>Tarta tatin de manzana con crema inglesa</li>
            <li>Pannacotta de vainilla con frutos rojos</li>
          </ul>
          <p><strong> Precio 50€</strong></p>
          <a href="/reservas">
            <button
              className="btn btn-secondary mt-5 mb-5 btn-lg"
              type="button"
            >
              RESERVAR
            </button>
          </a>
        </div>
        <div className="imagen-menu2">
          <img src={ImgMenuGrupo2}></img>
        </div>
      </section>
      <div className="d-flex justify-content-center">
        <hr style={{ color: "white", width: "75%" }}></hr>
      </div>

      <Footer></Footer>
      <Cookies />
    </div>
  );
};
export default MenusGrupos;
