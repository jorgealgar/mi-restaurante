import { Image } from "react-bootstrap";
import ImgPpal from "../assets/logorestaurante2.jpg";
import LogoIg from "../assets/ig_logo.png";
import LogoTwit from "../assets/twitter_logo.png";

function Footer(params) {
  return (
    <div className="footer d-flex flex-wrap align-items-center justify-content-around pt-5 pb-5">
      <div className="d-flex flex-column align-items-center justify-content-center ">
        <a href="/" style={{ width: "15%", minWidth: "142px" }}>
          <Image
            className="footer-logo"
            src={ImgPpal}
            roundedCircle
            style={{ width: "100%" }}
          ></Image>
        </a>

        <p> © 2024 The Butcher Club ,Derechos reservados</p>
        <div className="d-inline-flex redes ">
          <a href="https://x.com/" target="_blank">
            <img src={LogoTwit} alt="Logo-twitter"></img>
          </a>

          <a href="https://www.instagram.com/?locale=es" target="_blank">
            <img src={LogoIg} alt="Logo-ig"></img>
          </a>
        </div>
      </div>
      <div className="list-group m-5">
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
            <a
              href="/Politica_Privacidad_The_Butcher.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              POLÍTICA DE PRIVACIDAD
            </a>
          </li>
          <li>
            <a
              href="/Politica_Cookies_The_Butcher.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              POLÍTICA DE COOKIES
            </a>
          </li>
          <li>
            <a
              href="/Aviso_Legal_The_Butcher.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              AVISO LEGAL
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
