import PlatoItem from "./PlatoItem";
import ImagenPostre1 from "../assets/images/postre1.avif";
import ImagenPostre2 from "../assets/images/postre2.avif";
import ImagenPostre3 from "../assets/images/postre3.avif";
import "./PlatoItem.css";
const Postres = () => {
  return (
    <div className="contenedor-postres d-flex justify-content-around align-items-center flex-wrap ">
      <PlatoItem img={ImagenPostre1}>
        Chocolate con Coco: <br /> Chocolate negro, con base de coco rallado y
        virutas de coco tostado.
      </PlatoItem>
      <PlatoItem img={ImagenPostre2}>
        Brownie de Chocolate con Coco :<br /> Brownie casero de chocolate negro,
        con base de coco rallado.
      </PlatoItem>
      <PlatoItem img={ImagenPostre3}>
        Hojaldre de Manzanas:
        <br /> Hojaldre fino relleno de manzanas caramelizadas,masa de hojaldre
        casera.
      </PlatoItem>
    </div>
  );
};

export default Postres;
