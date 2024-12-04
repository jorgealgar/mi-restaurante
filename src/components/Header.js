import imgHeader from "../assets/logorestaurante2.jpg";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "./HeaderStyles.css";

function Header() {
  return (
    <nav className="d-flex justify-content-around align-items-center flex-wrap header">
      <Dropdown className="boton-izda">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          BUTCHER CLUB
        </Dropdown.Toggle>

        <Dropdown.Menu data-bs-theme="dark">
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="/carta">Carta</Dropdown.Item>
          <Dropdown.Item href="/nuestrosrestaurantes">Nuestros Restaurantes</Dropdown.Item>
          <Dropdown.Item href="/especialidades">Especialidades</Dropdown.Item>
          <Dropdown.Item href="/menus">Menu de grupos</Dropdown.Item>
          <Dropdown.Item href="/Reservas">
            Localizacion y Reservas
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <a href="/">
        <Image
          className="logo-ppal"
          src={imgHeader}
          roundedCircle
          style={{ width: "200px" }}
        />
      </a>
      <a href="/carta">

      <Button className="boton-carta" variant="secondary">
        Carta
      </Button>
      </a>
    </nav>
  );
}

export default Header;
