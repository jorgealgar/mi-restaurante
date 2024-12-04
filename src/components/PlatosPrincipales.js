import PlatosPrincipalesItem from "./PlatosPrincipalesItem";
import ImgPlatoPpal1 from "../assets/images/platoppal1.avif"
import ImgPlatoPpal2 from "../assets/images/platoppal2.avif"
import ImgPlatoPpal3 from "../assets/images/platoppal3.avif"


const PLatosPrincipales = (img, text) => {
    const text1 =
      "Are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";
    return (
      <div className="contenedor-postres d-flex justify-content-around align-items-center flex-wrap ">
        <PlatosPrincipalesItem img={ImgPlatoPpal1} txt={text1}></PlatosPrincipalesItem>
        <PlatosPrincipalesItem img={ImgPlatoPpal2} txt={text1}></PlatosPrincipalesItem>
        <PlatosPrincipalesItem img={ImgPlatoPpal3} txt={text1}></PlatosPrincipalesItem>
      </div>
    );
  };
  
  export default PLatosPrincipales;