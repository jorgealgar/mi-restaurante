import imgHeader from "../assets/logorestaurante2.jpg";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "./HeaderStyles.css";

function Header() {
  return (
    <nav className="d-flex justify-content-around align-items-center flex-wrap header">
      <Dropdown className="boton-izda">
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className="d-md-block d-none"
        >
          BUTCHER CLUB
        </Dropdown.Toggle>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className="d-block d-md-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu data-bs-theme="dark">
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="/carta">Carta</Dropdown.Item>
          <Dropdown.Item href="/nuestrosrestaurantes">
            Nuestros Restaurantes
          </Dropdown.Item>
          <Dropdown.Item href="/especialidades">Especialidades</Dropdown.Item>
          <Dropdown.Item href="/menus">Menu de grupos</Dropdown.Item>
          <Dropdown.Item href="/Reservas">
            Localizacion y Reservas
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <a href="/" style={{ width: "15%", minWidth: "142px" }}>
        <Image
          className="logo-ppal"
          src={imgHeader}
          roundedCircle
          style={{ width: "100%" }}
        />
      </a>

      <a
        href="/Carta.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="d-md-block d-none"
      >
        <Button className="boton-carta" variant="secondary">
          Carta
        </Button>
      </a>
    </nav>
  );
}

export default Header;
