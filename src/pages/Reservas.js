import Footer from "../components/Footer";
import Header from "../components/Header";
import Titulo from "../components/Titulo";

import "./ReservasStyles.css";
const Reservas = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header></Header>
      <Titulo>RESERVAS Y LOCALIZACIÓN</Titulo>
      <div className="formulario ">
        <form className="needs-validation" novalidate>
          <div className="form-row">
            <div className=" col-md-4 mb-3">
              <label style={{ color: "white" }} for="validationCustom01">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value=""
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label style={{ color: "white" }} for="validationCustom02">
                Apellidos
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value=""
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label style={{ color: "white" }} for="validationCustomUsername">
                Fecha
              </label>
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <input
                  type="date"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3 w-25">
              <label style={{ color: "white" }} for="validationCustom03">
                Hora
              </label>
              <input
                type="time"
                className="form-control"
                id="validationCustom03"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label style={{ color: "white" }} for="validationCustom04">
                The Butcher Club
              </label>
              <select
                className="custom-select"
                id="validationCustom04"
                required
              >
                <option selected disabled value="">
                  Elige Restaurante
                </option>
                <option>Restaurante1</option>
                <option>Restaurante2</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label style={{ color: "white" }} for="validationCustom05">
                E-mail
              </label>
              <input
                type="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Introduce un email válido (ejemplo@dominio.com)"
                className="form-control"
                id="validationCustom05"
                required
              />
              <div className="invalid-feedback"></div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label
                style={{ color: "white" }}
                className="form-check-label"
                for="invalidCheck"
              >
                Quiero recibir promociones y ofertas.
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-3" type="submit">
            Enviar
          </button>
        </form>

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
      </div>
      <map></map>

      <hr style={{ color: "white", width: "75%", marginLeft: "200px" }}></hr>
      <Footer></Footer>
    </div>
  );
};
export default Reservas;
