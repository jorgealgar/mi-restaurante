/*import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const CartaMenusLlevar = () => {
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };
}

export default CartaMenusLlevar;*/
import ImgCarousel from "../assets/images/imagen1carousel.avif";
import ImgCarousel2 from "../assets/images/imagen2carousel.avif";
import ImgCarousel3 from "../assets/images/menu-llevar1.avif"
const CartaMenusLlevar = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide w-75 d-flex justify-content-center pb-5 "
      data-ride="carousel"
    >
      <div className="carousel-inner w-75 ">
        <div className="carousel-item active d-flex justify-content-center ">
          <img className="d-block w-50 mx-auto " src={ImgCarousel} alt="First slide" />
        </div>
        <div className="carousel-item  ">
          <img
            className="d-block w-50 mx-auto"
            src={ImgCarousel2}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item ">
          <img className="d-block w-50 mx-auto" src={ImgCarousel3} alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev "
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next "
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CartaMenusLlevar;
