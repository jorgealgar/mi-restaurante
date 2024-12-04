import EntranteItem from "./EntranteItem";
import imagenEntrante from "../assets/images/entrante1.avif"
import imagenEntrante2 from "../assets/images/entrante2.avif"
import imagenEntrante3 from "../assets/images/entrante3.avif"
import "./EntrantesStyles.css";

const Entrantes = (img,text) => {
  const text1 = "Are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";
  return (
    <div className="contenedor-entrantes d-flex justify-content-around align-items-center flex-wrap ">
      <EntranteItem img={imagenEntrante} txt={text1}></EntranteItem>
      <EntranteItem img={imagenEntrante2} txt={text1}></EntranteItem>
      <EntranteItem
        img={imagenEntrante3}
        txt={text1}
      ></EntranteItem>
    </div>
  );
};

export default Entrantes;
