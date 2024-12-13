import { Image } from "react-bootstrap";
import ImgPpal from "../assets/logorestaurante2.jpg";
import LogoIg from "../assets/ig_logo.png";
import LogoTwit from "../assets/twitter_logo.png";
function Footer(params) {
  return (
    <div className="footer d-flex flex-wrap align-items-center justify-content-around pt-5 pb-5">
      <div className="d-flex flex-column align-items-center justify-content-center ">
        <a href="/">
          {" "}
          <Image className="footer-logo" src={ImgPpal} roundedCircle></Image>
        </a>

        <p> © 2024 The Butcher Club ,Derechos reservados</p>
        <div className="d-inline-flex redes ">
          <a href="">
            <img src={LogoTwit} alt="Logo-twitter"></img>
          </a>

          <a href="">
            <img src={LogoIg} alt="Logo-ig"></img>
          </a>
        </div>
      </div>
      <div className="list-group w-25">
        <ul>
          <li>
            <a href="/Carta">CARTA</a>
          </li>
          <li>
            <a href="/nuestrosrestaurantes">NUESTROS RESTAURANTES</a>
          </li>
          <li>
            <a href="/Especialidades">ESPECIALIDADES</a>
          </li>
          <li>
            <a href="/Menus">MENU DE GRUPOS</a>
          </li>
          <li>
            <a href="/Reservas">LOCALIZACION Y RESERVAS</a>
          </li>
        </ul>
        <hr></hr>
        <ul>
          <li>
            <a href="">POLÍTICA DE PRIVACIDAD</a>
          </li>
          <li>
            <a href="">POLÍTICA DE COOKIES</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
