import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mapa from "../components/Mapa";
import Titulo from "../components/Titulo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./ReservasStyles.css";
const Reservas = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    console.log(formElements.formDate.value);
  };

  return (
    <div style={{ backgroundColor: "#222422" }}>
      <Header></Header>
      <Titulo>RESERVAS Y LOCALIZACIÓN</Titulo>
      <div className="formulario w-100 d-flex justify-content-around align-items-center p-5">
        <Form data-bs-theme="dark" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label style={{ color: "white" }}>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label style={{ color: "white" }}>Apellidos</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label style={{ color: "white" }}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label style={{ color: "white" }}>Date</Form.Label>
            <Form.Control type="date" placeholder="Enter date" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label style={{ color: "white" }}>Time</Form.Label>
            <Form.Control type="time" placeholder="Enter time" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRest">
            <Form.Label style={{ color: "white" }}>
              Elige tu restaurante
            </Form.Label>
            <Form.Select required>
              <option value="1">Restaurante 1</option>
              <option value="2">Restaurante 2</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              style={{ color: "white" }}
              type="checkbox"
              label="Quiero recibir promociones y ofertas"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>

        {/*<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByclassNameName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classNameList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>*/}
        <Mapa></Mapa>
      </div>

      <hr style={{ color: "white", width: "75%", marginLeft: "200px" }}></hr>
      <Footer></Footer>
    </div>
  );
};
export default Reservas;
