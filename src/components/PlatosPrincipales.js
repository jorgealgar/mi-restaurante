import ImgPlatoPpal1 from "../assets/images/platoppal1.avif";
import ImgPlatoPpal2 from "../assets/images/platoppal2.avif";
import ImgPlatoPpal3 from "../assets/images/platoppal3.avif";
import PlatoItem from "./PlatoItem";
import "./PlatoItem.css";

const PLatosPrincipales = (img, text) => {
  return (
    <div className="contenedor-principales d-flex justify-content-around align-items-center flex-wrap ">
      <PlatoItem img={ImgPlatoPpal1}>
        Brócoli con Carne:
        <br /> Brócoli salteado al wok con tiras de carne marinada Técnica:
        Salteado rápido para conservar crujiente del brócoli
      </PlatoItem>
      <PlatoItem img={ImgPlatoPpal2}>
        Carpaccio de Atún :<br /> Finas láminas de atún fresco marinado,
        cortadas casi transparentes
      </PlatoItem>
      <PlatoItem img={ImgPlatoPpal3}>
        Chuletón a la Parrilla:
        <br /> Chuletón de buey madurado, cocinado a la parrilla,Grueso, de más
        de 500 gramos
      </PlatoItem>
    </div>
  );
};

export default PLatosPrincipales;
