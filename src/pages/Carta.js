import Entrantes from "../components/Entrantes";
import Header from "../components/Header";
import Titulo from "../components/Titulo";
import Footer from "../components/Footer";
import Postres from "../components/Postres";
import PLatosPrincipales from "../components/PlatosPrincipales";
import MenuGrupos from "../components/MenuGrupos";
import CartaMenusLlevar from "../components/CartaMenusLlevar";
import Cookies from "../components/Cookies";
import ControlledCarousel from "../components/CartaMenusLlevar";

function Carta() {
  return (
    <div style={{ backgroundColor: "#222422" }}>
      <Header />
      <Titulo>ENTRANTES</Titulo>
      <Entrantes></Entrantes>
      <Titulo>PLATOS PRINCIPALES</Titulo>
      <PLatosPrincipales></PLatosPrincipales>
      <Titulo>POSTRES</Titulo>
      <Postres></Postres>
      <Titulo>MENU DE GRUPOS</Titulo>
      <MenuGrupos></MenuGrupos>
      <Titulo>COMIDA PARA LLEVAR</Titulo>
      <ControlledCarousel/>

      <div className="d-flex justify-content-center">
        <hr style={{ color: "white", width: "75%" }}></hr>
      </div>

      <Footer></Footer>
      <Cookies />
    </div>
  );
}

export default Carta;
