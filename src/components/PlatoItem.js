import "./PlatoItem.css";

const PlatoItem = ({ img, children }) => {
  return (
    <div
      style={{ width: "20em" }}
      className="entrantes d-flex justify-content-around align-items-center flex-column flex-wrap col-10 col-md-3"
    >
      <img style={{ width: "100%" }} src={img} alt="imagen-entrante"></img>
      <p className="pt-5">{children}</p>
    </div>
  );
};

export default PlatoItem;
