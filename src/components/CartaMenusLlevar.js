import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ImgCarousel from "../assets/images/imagen1carousel.avif";
import ImgCarousel2 from "../assets/images/imagen2carousel.avif";
import ImgCarousel3 from "../assets/images/menu-llevar3.avif"
import { Image } from "react-bootstrap";
import "./CartaMenuLlevarStyles.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="caorusel column justify-content-center pb-5 col-12 col-xl-4 "
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <Image className="img " src={ImgCarousel} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="img " src={ImgCarousel2} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="img " src={ImgCarousel3} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
