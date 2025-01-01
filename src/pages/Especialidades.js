import Footer from "../components/Footer";
import Header from "../components/Header";
import Titulo from "../components/Titulo";
import ImgEspecialidad1 from "../assets/images/especialidad1.avif";
import ImgEspecialidad2 from "../assets/images/especialidad2.avif";
import Cookies from "../components/Cookies";

const Especialidades = () => {
  const texto =
    "En el corazón de nuestra cocina late una pasión por los sabores auténticos y la innovación gastronómica. Cada plato que servimos es un testimonio de nuestra dedicación a la alta cocina y al respeto por los ingredientes locales.Las especialidades de la casa comienzan con nuestros entrantes emblemáticos. El tartar de salmón, elaborado con pescado fresco seleccionado a diario, se prepara con una precisión milimétrica, mezclado con aguacate cremoso y un toque de cítricos que despiertan todos los sentidos. Nuestra tostada de aguacate con huevo pochado es un clásico que reinterpreta el brunch tradicional, con un huevo de granja y pan artesano que maridan a la perfección.Los platos principales son un tributo a la diversidad culinaria. El chuletón de buey, madurado durante semanas y cocinado a la parrilla punto, se ha convertido en nuestra carta de presentación. El carpaccio de atún, con su corte fino y marinado delicado, refleja nuestra búsqueda constante de la excelencia. Destacamos también nuestra propuesta de brócoli con carne, un plato que fusiona técnicas de cocina oriental con productos locales.";
  return (
    <div style={{ backgroundColor: "#222422" }}>
      <Header></Header>
      <Titulo>ESPECIALIDADES</Titulo>
      <div className="especialidades  d-flex flex-column align-items-center justify-content-around">
        <img className="w-50 pb-5 " src={ImgEspecialidad1} alt="img1"></img>
        <h2 style={{ color: "white" }}>NUESTRAS ESPECIALIDADES</h2>
        <p className="w-75 pt-3">{texto}</p>
        <img className="w-50 pt-5 pb-5" src={ImgEspecialidad2} alt="img2"></img>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ color: "white", width: "75%" }}></hr>
      </div>

      <Footer></Footer>
      <Cookies />
    </div>
  );
};
export default Especialidades;
