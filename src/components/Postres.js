import PostresItem from "./PostresItem";
import ImagenPostre1 from "../assets/images/postre1.avif";
import ImagenPostre2 from "../assets/images/postre2.avif";
import ImagenPostre3 from "../assets/images/postre3.avif";
const Postres = (img, text) => {
  const text1 =
    "Are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";
  return (
    <div className="contenedor-postres d-flex justify-content-around align-items-center flex-wrap ">
      <PostresItem img={ImagenPostre1} txt={text1}></PostresItem>
      <PostresItem img={ImagenPostre2} txt={text1}></PostresItem>
      <PostresItem img={ImagenPostre3} txt={text1}></PostresItem>
    </div>
  );
};

export default Postres;
