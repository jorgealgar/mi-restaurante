import Entrantes from "../components/Entrantes";
import Header from "../components/Header";
import Titulo from "../components/Titulo";
import Footer from "../components/Footer";
import Postres from "../components/Postres";
import PLatosPrincipales from "../components/PlatosPrincipales";
import MenuGrupos from "../components/MenuGrupos";
const comida = [
  {
    
  }
]
function Carta() {
  return (
    <div style={{ backgroundColor:  "#222422"  }}>
      <Header />
      <Titulo>ENTRANTES</Titulo>
      <Entrantes></Entrantes>
      <Titulo>PLATOS PRINCIPALES</Titulo>
      <PLatosPrincipales></PLatosPrincipales>
      <Titulo>POSTRES</Titulo>
      <Postres></Postres>
      <Titulo>MENU DE GRUPOS</Titulo>
      <MenuGrupos></MenuGrupos>
      <hr style={{color: "white", width:"75%", marginLeft:"200px" }}></hr>
      <Footer></Footer>

    </div>
  );
}

export default Carta;
