import Header from "../components/Header";
import RestauranteItem1 from "../components/RestauranteItem1";
import Titulo from "../components/Titulo";
import Footer from "../components/Footer";
import RestauranteItem2 from "../components/RestauranteItem2";
const NuestrosRestaurantes = () => {
  return (
    <div style={{ backgroundColor:  "#222422"  }}>
      <Header></Header>
      <Titulo>NUESTROS RESTAURANTES</Titulo>
      <RestauranteItem1></RestauranteItem1>
      <RestauranteItem2></RestauranteItem2>
      <hr  style={{color: "white", width:"75%", marginLeft:"200px" }}></hr>
      <Footer></Footer>
      
     
    </div>
  );
};
export default NuestrosRestaurantes;
