import Footer from "../components/Footer";
import Header from "../components/Header";
import Titulo from "../components/Titulo";
import ImgEspecialidad1 from "../assets/images/especialidad1.avif"
import ImgEspecialidad2 from "../assets/images/especialidad2.avif"
const Especialidades = () => {
    const texto = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident"
  return (
    <div style={{ backgroundColor:  "#222422"  }}>
      <Header></Header>
      <Titulo>ESPECIALIDADES</Titulo>
      <div className="especialidades  w-100 d-flex flex-column align-items-center">
        <img className= "w-50 pb-5 " src={ImgEspecialidad1} alt="img1"></img>
        <h2 style={{color: "white"}}>NUESTRAS ESPECIALIDADES</h2>
        <p className="w-75 pt-3">{texto}</p>
        <img className= "w-50 pt-5 pb-5" src={ImgEspecialidad2} alt="img2"></img>
      </div>
      <hr style={{color: "white", width:"75%", marginLeft:"200px" }}></hr>
      <Footer></Footer>
    </div>
  );
};
export default Especialidades;
