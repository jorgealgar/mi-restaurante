import Header from "../components/Header";
import "./HomeStyles.css";
import ImagenInicio from "../components/ImagenInicio";
import ImagenesCarta from "../components/CartaImgPpal";
import Titulo from "../components/Titulo";
import Restaurantes from "../components/Restaurantes";
import Footer from "../components/Footer";
import imgRest1 from "../assets/images/rest1.avif";
import imgRest2 from "../assets/images/rest2.avif";
//Creo una variable restaurante que es un objeto dentro de una lista en el que sus keys van a cambiar.
const restaurantes = [
  {
    descripcion:
      "Ubicado en el centro histórico de la ciudad, La Raíz representa nuestro primer local familiar. Este restaurante rinde homenaje a las recetas tradicionales de nuestros abuelos, con un ambiente cálido y acogedor que transporta a los comensales a los orígenes de nuestra cocina, Concepto: Cocina tradicional con alma contemporánea. Un espacio donde los sabores clásicos se encuentran con técnicas modernas de preparación. Cada plato cuenta una historia de herencia familiar, con ingredientes locales y recetas transmitidas por generaciones, Ambiente: Decoración rústica con elementos vintage, maderas cálidas, fotografías familiares y utensilios de cocina antiguos que decoran las paredes. Música suave de fondo que recrea la atmósfera de una cocina tradicional.",
    img: imgRest1,
    invertido: false,
  },
  {
    descripcion:
      "Situado en la zona moderna de la ciudad, Fuego Nuevo representa nuestra visión más innovadora y contemporánea. Un espacio que desafía los límites culinarios, mezclando técnicas tradicionales con influencias internacionales.Concepto: Cocina de fusión que experimenta con sabores globales manteniendo la esencia de nuestra cocina local. Un laboratorio gastronómico donde cada plato es una obra de arte culinaria que desafía las expectativas tradicionales.Ambiente: Diseño industrial moderno, con cocina abierta que permite a los comensales observar la preparación de los platos. Tonos metálicos, iluminación tenue, y un bar de cócteles que complementa la experiencia gastronómica.",
    img: imgRest2,
    invertido: true,
  },
];

function Home() {
  return (
    <div style={{ backgroundColor:"#222422"  }}>
      <Header />
      <ImagenInicio />
      <p className="px-5 d-flex">
        En el corazón de Madrid, donde las tradiciones culinarias se entrelazan
        con la pasión familiar, nace nuestro restaurante BUTCHER CLUB
        RESTAURANT. Todo comenzó en 1985, cuando mi abuelo Antonio, un
        inmigrante con un sueño y una receta heredada de su madre, decidió
        compartir la magia de la cocina tradicional con esta comunidad.
        Inicialmente, éramos solo un pequeño puesto en el mercado local. Antonio
        preparaba platos que recordaban su pueblo natal en Madrid, utilizando
        ingredientes frescos y recetas transmitidas de generación en generación.
        Cada guiso, cada salsa, cada bocado contaba una historia de amor y
        remembranza. Mi padre, Carlos, se unió al negocio familiar en los años
        90, modernizando algunas técnicas pero manteniendo intacto el alma de
        nuestra cocina. Aprendió de su padre el secreto más importante: que la
        comida no solo alimenta el cuerpo, sino también el espíritu.{" "}
      </p>
      <Titulo>BUTCHER CLUB RESTAURANT</Titulo>
      <ImagenesCarta></ImagenesCarta>
      <Titulo>NUESTROS RESTAURANTES</Titulo>
      <Restaurantes restaurantes={restaurantes}></Restaurantes>
      <Titulo>NUESTRA HISTORIA</Titulo>
      <p className="px-5 pb-5 d-flex">
        Mi padre, Carlos, se unió al negocio familiar en los años 90,
        modernizando algunas técnicas pero manteniendo intacto el alma de
        nuestra cocina. Aprendió de su padre el secreto más importante: que la
        comida no solo alimenta el cuerpo, sino también el espíritu. En el 2005,
        después de años de trabajo junto a mi familia, decidí expandir nuestro
        pequeño puesto a un restaurante formal. Queríamos crear un espacio donde
        los comensales no solo disfrutaran de una excelente comida, sino que
        también sintieran la calidez de nuestra historia familiar. Hoy, BUTCHER
        CLUB RESTAURANT es más que un restaurante. Es un tributo a nuestras
        raíces, un puente entre tradiciones, y un lugar donde cada plato cuenta
        una historia. Seguimos fieles a las recetas originales de mi abuelo,
        utilizando técnicas tradicionales y productos locales de la más alta
        calidad. Nuestra filosofía es simple: cocinar con amor, respetar los
        ingredientes y crear momentos que se recuerdan mucho después de que el
        plato está vacío. Cada miembro de nuestro equipo comparte esta pasión, y
        cada cliente se convierte en parte de nuestra gran familia. Te invitamos
        a sentarte a nuestra mesa, a probar no solo comida, sino décadas de
        historia, tradición y amor por la cocina.
      </p>
      <hr style={{ color: "white", width: "75%", marginLeft: "200px" }}></hr>
      <Footer></Footer>
    </div>
  );
}

export default Home;
