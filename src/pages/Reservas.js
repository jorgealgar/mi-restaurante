import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mapa from "../components/Mapa";
import Titulo from "../components/Titulo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cookies from "../components/Cookies";

import "./ReservasStyles.css";

const Reservas = () => {
  //Control del estado del input de Nombre
  const [nombre, setNombre] = useState("");
  //Control del estado del input de Apellidos
  const [apellidos, setApellidos] = useState("");
  //Control del estado del input de Email
  const [email, setEmail] = useState("");
  //Control del estado del input de Fecha
  const [fecha, setFecha] = useState("");
  //Control del estado del input de Hora
  const [hora, setHora] = useState("");
  //control del estado del input de Restaurante
  const [restaurante, setRestaurante] = useState("");
  //Control del estado del input de Check
  const [check, setCheck] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!apellidos.trim())
      newErrors.apellidos = "Los apellidos son obligatorios.";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "El email no es válido.";
    if (!fecha) newErrors.fecha = "La fecha es obligatoria.";
    if (!hora) newErrors.hora = "La hora es obligatoria.";
    if (!restaurante)
      newErrors.restaurante = "Debes seleccionar un restaurante.";
    if (!check) newErrors.check = "Debes aceptar recibir promociones.";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log("Formulario enviado con éxito:", {
        nombre,
        apellidos,
        email,
        fecha,
        hora,
        restaurante,
        check,
      });
      alert("Formulario enviado con éxito.");
    }

    /*const formElements = event.currentTarget.elements;
    console.log(formElements.formEmail.value);*/
  };

  return (
    <div style={{ backgroundColor: "#222422" }}>
      <Header></Header>
      <Titulo>RESERVAS Y LOCALIZACIÓN</Titulo>
      <div className="formulario d-flex flex-wrap justify-content-around align-items-center p-5">
        <Form data-bs-theme="dark" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label style={{ color: "white" }}>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              name="nombre"
              isInvalid={!!errors.nombre}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombre}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label style={{ color: "white" }}>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              family-name="apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              isInvalid={!!errors.apellidos}
            />
            <Form.Control.Feedback type="invalid">
              {errors.apellidos}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label style={{ color: "white" }}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label style={{ color: "white" }}>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              name="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              isInvalid={!!errors.fecha}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fecha}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label style={{ color: "white" }}>Time</Form.Label>
            <Form.Control
              type="time"
              placeholder="Enter time"
              name="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              isInvalid={!!errors.hora}
            />
            <Form.Control.Feedback type="invalid">
              {errors.hora}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRest">
            <Form.Label style={{ color: "white" }}>
              Elige tu restaurante
            </Form.Label>
            <Form.Select
              value={restaurante}
              onChange={(e) => setRestaurante(e.target.value)}
              isInvalid={!!errors.restaurante}
            >
              <option value="">Selecciona un restaurante</option>
              <option value="1">Restaurante 1</option>
              <option value="2">Restaurante 2</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.restaurante}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              style={{ color: "white" }}
              type="checkbox"
              label="Quiero recibir promociones y ofertas"
              value={check}
              onChange={(e) => setCheck(e.target.checked)}
              isInvalid={!!errors.check}
            />
            <Form.Control.Feedback type="invalid">
              {errors.hora}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>

        <div className="d-flex flex-wrap col-12 col-lg-6">
          <Mapa></Mapa>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ color: "white", width: "75%" }}></hr>
      </div>

      <Footer></Footer>
      <Cookies />
    </div>
  );
};
export default Reservas;
