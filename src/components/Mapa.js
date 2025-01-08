import "./MapaStyles.css";
const Mapa = () => {
  return (
    <div className="mapa p-5 d-flex w-100 flex-column align-items-center pt-5">
      <h3>ESTAMOS AQUÍ</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48562.3470633193!2d-3.6695532252929697!3d40.47201964567028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1733412038371!5m2!1ses!2ses"
        width="600"
        height="450"
        style={{ border: "2" }}
        allowFullScreen=""
        loading="lazy"
        tabIndex="0"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Mapa;
