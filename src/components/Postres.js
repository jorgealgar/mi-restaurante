import PostresItem from "./PostresItem";
import ImagenPostre1 from "../assets/images/postre1.avif";
import ImagenPostre2 from "../assets/images/postre2.avif";
import ImagenPostre3 from "../assets/images/postre3.avif";
import "./PostresStyles.css";
const Postres = (img, text) => {
  const text1 =
  <>
  Chocolate con Coco: <br/> Chocolate negro, con base de coco rallado y virutas de coco tostado.
  </>
    
  const text2 =
  <>
   Brownie de Chocolate con Coco :<br/> Brownie casero de chocolate negro, con base de coco rallado.
  </>
   
  const text3 =
  <>
   Hojaldre de Manzanas:<br/> Hojaldre fino relleno de manzanas caramelizadas,masa de hojaldre casera.
  </>
   
  return (
    <div className="contenedor-postres d-flex justify-content-around align-items-center flex-wrap ">
      <PostresItem img={ImagenPostre1} txt={text1}></PostresItem>
      <PostresItem img={ImagenPostre2} txt={text2}></PostresItem>
      <PostresItem img={ImagenPostre3} txt={text3}></PostresItem>
    </div>
  );
};

export default Postres;
