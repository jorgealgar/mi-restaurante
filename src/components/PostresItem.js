import "./PostresStyles.css";

const PostresItem = ({ img, txt }) => {
  return (
    <div
    style={{ width: "20em" }}
      className="postres  d-flex justify-content-around align-items-center flex-column  flex-wrap col-10 col-md-3"
    >
      <img style={{ width: "100%" }} src={img} alt="imagen-postre"></img>
      <p className="pt-5">{txt}</p>
    </div>
  );
};

export default PostresItem;
