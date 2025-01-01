import ImgMenuLlevar1 from "../assets/images/menu-llevar1.avif";
import ImgMenuLlevar2 from "../assets/images/menu-llevar2.avif";
import ImgMenuLlevar3 from "../assets/images/menu-llevar3.avif";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./MenuGruposStyles.css";

const MenuGrupos = (img) => {
  return (
    <div className="menu-grupos d-flex flex-wrap justify-content-around px-5 w-100 pb-5 pt-5">
      <Card className="mt-3" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={ImgMenuLlevar1} />
        <Card.Body className="card" >
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
          <a href="/Menus">
          <Button variant="secondary">VER</Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="mt-3" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={ImgMenuLlevar2} />
        <Card.Body >
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
          <a href="/Menus">
          <Button variant="secondary">VER</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuGrupos;
