import PostresItem from "./PostresItem";
import ImagenPostre1 from "../assets/images/postre1.avif";
import ImagenPostre2 from "../assets/images/postre2.avif";
import ImagenPostre3 from "../assets/images/postre3.avif";
const Postres = (img, text) => {
  const text1 =
    "Chocolate con Coco: Chocolate negro, con base de coco rallado, Virutas de coco tostado";
  const text2 =
    "Brownie de Chocolate con Coco : Descripción: Brownie casero de chocolate negro, con base de coco rallado";
  const text3 =
    "Hojaldre de Manzanas: Descripción: Hojaldre fino relleno de manzanas caramelizadas,Masa de hojaldre casera, manzanas de temporada";
  return (
    <div className="contenedor-postres d-flex justify-content-around align-items-center flex-wrap ">
      <PostresItem img={ImagenPostre1} txt={text1}></PostresItem>
      <PostresItem img={ImagenPostre2} txt={text2}></PostresItem>
      <PostresItem img={ImagenPostre3} txt={text3}></PostresItem>
    </div>
  );
};

export default Postres;
