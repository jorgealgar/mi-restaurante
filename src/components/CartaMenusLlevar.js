import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ImgCarousel from "../assets/images/imagen1carousel.avif";
import ImgCarousel2 from "../assets/images/imagen2carousel.avif";
import ImgCarousel3 from "../assets/images/menu-llevar3.avif";
import { Image } from "react-bootstrap";
import "./CartaMenuLlevarStyles.css";
import Button from "react-bootstrap/Button";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-around align-items-center w-100 ">
        <div className="contenedor-text d-flex flex-column justify-content-center align-items-center w-50  pb-5 ">
          <h3>COMIDA PARA LLEVAR "TO HOME"</h3>
          <ul className="menu-grupo1 d-flex flex-wrap flex-column justify-content-center align-content-center text-center pt-3">
            PRIMEROS
            <hr style={{ color: "white" }}></hr>
            <li>Surtido de ibéricos con pan de cristal y tomate rallado</li>
            <li>Ensalada de burrata con tomates cherry y pesto casero</li>
            <li>Croquetas caseras de jamón ibérico (6 unidades)</li>
          </ul>
          <ul className="menu-grupo1 text-center">
            SEGUNDOS
            <hr style={{ color: "white" }}></hr>
            <li>Entrecot de ternera a la parrilla con patatas y pimientos</li>
            <li>Bacalao confitado con crema de ajo y espinacas salteadas</li>
            <li>Arroz meloso con setas de temporada y parmesano</li>
          </ul>
          <ul className="menu-grupo1 text-center">
            POSTRES
            <hr style={{ color: "white" }}></hr>
            <li>Tarta de queso casera con coulis de frutos rojos</li>
            <li>Brownie templado con helado de vainilla</li>
            <li>Tiramisú tradicional</li>
          </ul>
          <Button href="" className="button btn-secondary mt-5 ">
            LLAMAR
          </Button>
        </div>
        <div className="carousel col-8 col-md-12 d-flex justify-content-center">
          <Carousel
            className="caorusel column d-flex justify-content-center text-center pb-5 "
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <Image className="img " src={ImgCarousel} text="First slide" />
              <Carousel.Caption>
                <h3>Entrantes</h3>
                <p>Grandes entrantes para disfrutar en casa.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="img " src={ImgCarousel2} text="Second slide" />
              <Carousel.Caption>
                <h3>Ensaladas</h3>
                <p>Ensaladas variadas con ingredientes frescos.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="img " src={ImgCarousel3} text="Third slide" />
              <Carousel.Caption>
                <h3>Pizzas</h3>
                <p>Pizzas Italianas de Napoles al horno de piedra.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default ControlledCarousel;
