import PlatosPrincipalesItem from "./PlatosPrincipalesItem";
import ImgPlatoPpal1 from "../assets/images/platoppal1.avif";
import ImgPlatoPpal2 from "../assets/images/platoppal2.avif";
import ImgPlatoPpal3 from "../assets/images/platoppal3.avif";
import "./PlprincipalesStyles.css";

const PLatosPrincipales = (img, text) => {
  const text1 = (
    <>
      Brócoli con Carne:
      <br /> Brócoli salteado al wok con tiras de carne marinada Técnica:
      Salteado rápido para conservar crujiente del brócoli
    </>
  );

  const text2 = (
    <>
      Carpaccio de Atún :<br /> Finas láminas de atún fresco marinado, cortadas
      casi transparentes
    </>
  );

  const text3 = (
    <>
      Chuletón a la Parrilla:
      <br /> Chuletón de buey madurado, cocinado a la parrilla,Grueso, de más de
      500 gramos
    </>
  );

  return (
    <div className="contenedor-principales d-flex justify-content-around align-items-center flex-wrap ">
      <PlatosPrincipalesItem
        img={ImgPlatoPpal1}
        txt={text1}
      ></PlatosPrincipalesItem>
      <PlatosPrincipalesItem
        img={ImgPlatoPpal2}
        txt={text2}
      ></PlatosPrincipalesItem>
      <PlatosPrincipalesItem
        img={ImgPlatoPpal3}
        txt={text3}
      ></PlatosPrincipalesItem>
    </div>
  );
};

export default PLatosPrincipales;
