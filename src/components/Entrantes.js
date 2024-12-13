import EntranteItem from "./EntranteItem";
import imagenEntrante from "../assets/images/entrante1.avif";
import imagenEntrante2 from "../assets/images/entrante2.avif";
import imagenEntrante3 from "../assets/images/entrante3.avif";
import "./EntrantesStyles.css";

const Entrantes = (img, text) => {
  const text1 =
    "Hamburguesa Gourmet: Descripción: Hamburguesa de carne de vacuno premium, elaborada con blend de cortes selectos, cocinada al punto, servida en pan artesano con queso fundido ";
    const text2 = "Tostada de Aguacate con Huevo Pochado:Descripción: Pan tostado integral cubierto con aguacate cremoso, coronado por huevo pochado con yema líquida "
    const text3 = "Hummus Tradicional: Descripción: Crema de garbanzos triturados, elaborada con tahini, aceite de oliva, ajo y limón "
  return (
    <div className="contenedor-entrantes d-flex justify-content-around align-items-center flex-wrap ">
      <EntranteItem img={imagenEntrante} txt={text1}></EntranteItem>
      <EntranteItem img={imagenEntrante2} txt={text2}></EntranteItem>
      <EntranteItem img={imagenEntrante3} txt={text3}></EntranteItem>
    </div>
  );
};

export default Entrantes;
