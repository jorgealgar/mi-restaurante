import { useState, useEffect } from "react"; // Hooks para manejar estado y efectos secundarios.
import Form from "react-bootstrap/Form"; // Componente de formulario de react-bootstrap.

const Cookies = () => {
  // Estado que controla si el banner de cookies es visible.
  const [visible, setVisible] = useState(true);
  // Estado que verifica si se ha aceptado la política de privacidad.
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  //Estado que verifica si se han aceptado las cookies.
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  //Estado que verifica si se ha aceptado el aviso legal..
  const [legacyAccepted, setLegacyAccepted] = useState(false);
  // Al montar el componente, verifica si el usuario ya aceptó las políticas.
  useEffect(() => {
    const clicado =
      localStorage.getItem(
        "politicasClicadas" && "cookiesClicadas" && "legacyClicadas"
      ) === "true";
    setVisible(!clicado); // Si ya aceptó, no se muestra el banner.
  }, []); // Efecto que se ejecuta solo una vez al montar el componente.

  // Maneja la acción de aceptar las cookies, guardando la decisión en localStorage.
  const handleCookies = () => {
    localStorage.setItem("politicasClicadas", "true"); // Almacena la aceptación en localStorage.
    setVisible(false); // Oculta el banner.
    localStorage.setItem("cookiesClicadas", "true");
    setVisible(false);
    localStorage.setItem("legacyClicadas", "true");
    setVisible(false);
  };

  // Maneja el cambio en el checkbox, actualizando el estado de aceptación de privacidad.
  const handlePrivacyAccepted = (e) => {
    setPrivacyAccepted(e.target.checked); // Actualiza el estado según si el checkbox está marcado.
  };

  //Maneja el cambio del checkbox, actualizando el estado de aceptacion de cookies.
  const handleCookiesAccepted = (e) => {
    setCookiesAccepted(e.target.checked);
  };

  //Maneja el cambio del checkbox, actualizando el estado de aceptacion del aviso legal..
  const handleLegacyAccepted = (e) => {
    setLegacyAccepted(e.target.checked);
  };

  // Renderiza el banner si debe ser visible.
  if (visible) {
    return (
      <div
        className="fixed-bottom py-4 px-4"
        style={{
          backgroundColor: "rgb(226, 224, 224)",
        }}
      >
        <h5> Por favor, acepte los siguientes:</h5>
        <Form.Check
          type={"checkbox"}
          id={`default-checkbox`}
          value={cookiesAccepted}
          onChange={handleCookiesAccepted}
          label={
            <a
              href="/Politica_Cookies_The_Butcher.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politica de Cookies.
            </a>
          }
        />
        <Form.Check
          type={"checkbox"}
          id={`default-checkbox`}
          value={privacyAccepted}
          onChange={handlePrivacyAccepted}
          label={
            <a
              href="/Politica_Privacidad_The_Butcher.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politica de privacidad.
            </a>
          }
        />
        <Form.Check
          type={"checkbox"}
          id={`default-checkbox`}
          value={legacyAccepted}
          onChange={handleLegacyAccepted}
          label={
            <a
              href="/Aviso_Legal_The_Butcher.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aviso Legal
            </a>
          }
        />
        <button
          style={{ width: "200px" }}
          onClick={handleCookies}
          disabled={!privacyAccepted}
        >
          OK
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Cookies;
