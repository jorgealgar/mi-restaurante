import ImgMenuLlevar1 from "../assets/images/menu-llevar1.avif";
import ImgMenuLlevar2 from "../assets/images/menu-llevar2.avif";
import ImgMenuLlevar3 from "../assets/images/menu-llevar3.avif";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import "./MenuGruposStyles.css";
import { useState } from "react";

const MenuGrupos = (img) => {
  const [isAccordion1Open, setAccordion1Open] = useState(false);
  const [isAccordion2Open, setAccordion2Open] = useState(false);

  return (
    <div className="menu-grupos d-flex flex-wrap justify-content-around px-5 w-100 pb-5 pt-5">
      <Card
        className={`mt-3 ${isAccordion1Open ? "expanded-card" : ""}`}
        style={{ width: "30rem", transition: "all 0.3s ease" }}
      >
        <Card.Img variant="top" src={ImgMenuLlevar1} />
        <Card.Body className="card">
          <Card.Title>Menu de Grupo 1: "Sabores Tradicionales"</Card.Title>
          <Card.Text className="texto">
            Sumérgete en un viaje gastronómico que celebra los sabores más
            auténticos de nuestra cocina. Un menú diseñado para grupos que
            buscan una experiencia culinaria memorable y reconfortante.
            Comenzamos con entrantes que despiertan el apetito: un delicioso
            jamón ibérico, croquetas caseras y una selección de quesos locales
            que nos transportan a los orígenes de nuestra gastronomía.Cerramos
            con un postre tradicional: tarta de queso al estilo vasco, con su
            característico exterior tostado y un interior cremoso que derrite en
            la boca, acompañado de un café o digestivo.
          </Card.Text>
          <Accordion>
            <Accordion.Item
              eventKey="0"
              onClick={() => setAccordion1Open(!isAccordion1Open)}
            >
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              VER OPCIONES
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/Menus">VISITAR MENU</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>

      <Card
        className={`mt-3 ${isAccordion2Open ? "expanded-card" : ""}`}
        style={{ width: "30rem", transition: "all 0.3s ease" }}
      >
        <Card.Img variant="top" src={ImgMenuLlevar2} />
        <Card.Body>
          <Card.Title>Menu de Grupo 2: "Fusion Contemporanea"</Card.Title>
          <Card.Text className="texto">
            Invitamos a los grupos a explorar una experiencia gastronómica que
            fusiona tradiciones culinarias con técnicas de vanguardia. Un menú
            que sorprende y deleita en cada bocado. Iniciamos con una propuesta
            fresca: tartar de salmón con aguacate, humus de remolacha y tostadas
            de pan artesano que combinan texturas y sabores inesperados con
            maestría. El plato principal es un ejemplar de creatividad:
            costillas de ternera marinadas en especias orientales, servidas
            sobre un cremoso puré de coliflor y reducción de vino tinto, que
            desafía los límites de la cocina tradicional.
          </Card.Text>
          <Accordion>
            <Accordion.Item
              eventKey="1"
              onClick={() => setAccordion2Open(!isAccordion2Open)}
            >
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              VER OPCIONES
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/Menus">VISITAR MENU</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuGrupos;
