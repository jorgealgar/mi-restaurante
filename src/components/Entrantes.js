import PlatoItem from "./PlatoItem";
import imagenEntrante0 from "../assets/images/hamburguesa1.jpg";
import imagenEntrante2 from "../assets/images/entrante2.avif";
import imagenEntrante3 from "../assets/images/entrante3.avif";
import "./PlatoItem.css"; 

const Entrantes = (img, text) => {
  return (
    <div className="contenedor-entrantes d-flex justify-content-around align-items-center flex-wrap w-100">
      <PlatoItem img={imagenEntrante0}>
        Hamburguesa Gourmet:
        <br /> Hamburguesa de carne de vacuno premium, elaborada con blend de
        cortes selectos, cocinada al punto,con queso fundido
      </PlatoItem>
      <PlatoItem img={imagenEntrante2}>
        Tostada de Aguacate con Huevo Pochado: <br /> Pan tostado integral
        cubierto con aguacate cremoso, coronado por huevo pochado con yema
        líquida
      </PlatoItem>
      <PlatoItem img={imagenEntrante3}>
        Hummus Tradicional:
        <br /> Crema de garbanzos triturados, elaborada con tahini, aceite de
        oliva, ajo y limón
      </PlatoItem>
    </div>
  );
};

export default Entrantes;
