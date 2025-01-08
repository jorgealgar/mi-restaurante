import Footer from "../components/Footer";
import Header from "../components/Header";
import Titulo from "../components/Titulo";
import Cookies from "../components/Cookies";
import Entrantes from "../components/Entrantes";
import PLatosPrincipales from "../components/PlatosPrincipales";
import Postres from "../components/Postres";

const Especialidades = () => {
  return (
    <div style={{ backgroundColor: "#222422" }}>
      <Header></Header>
      <Titulo>ESPECIALIDADES</Titulo>
      <p className="d-flex align-content-center ">
        Bienvenidos a The Butcher En The Butcher , nos apasiona llevar a su mesa
        sabores únicos y experiencias culinarias memorables. Nuestra carta de
        especialidades ha sido cuidadosamente diseñada por nuestro equipo de
        chefs, combinando ingredientes frescos, técnicas tradicionales y un
        toque de creatividad. Cada plato refleja nuestra dedicación a la calidad
        y el detalle, invitándolos a disfrutar de una celebración de los
        sentidos en cada bocado. Permítanos acompañarlos en un viaje
        gastronómico que deleitará su paladar y despertará nuevas emociones.
        ¡Gracias por elegirnos para compartir este momento especial!
      </p>
      <Titulo>ENTRANTES</Titulo>
      <Entrantes></Entrantes>
      <Titulo>PLATOS PRINCIPALES</Titulo>
      <PLatosPrincipales></PLatosPrincipales>
      <Titulo>POSTRES</Titulo>
      <Postres></Postres>
      <div className="d-flex justify-content-center">
        <hr style={{ color: "white", width: "75%" }}></hr>
      </div>

      <Footer></Footer>
      <Cookies />
    </div>
  );
};
export default Especialidades;
