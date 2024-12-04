import ImgMenuLlevar1 from "../assets/images/menu-llevar1.avif";
import ImgMenuLlevar2 from "../assets/images/menu-llevar2.avif";
import ImgMenuLlevar3 from "../assets/images/menu-llevar3.avif";
import "./MenuGruposStyles.css";

const MenuGrupos = (img) => {
  return (
    <div className="menu-grupos d-flex justify-content-between px-5 w-100 pb-5 pt-5">
      <article className="grupo d-flex flex-column align-items-center ">
        <h3>MENU DE GRUPOS</h3>
        <hr style={{}}></hr>
        <ul className="lista-menu-grupo">
          PRIMEROS
          <hr></hr>
          <li>Plato 1</li>
          <li>Plato 2</li>
          <li>Plato 3</li>
        </ul>
        <ul className="lista-menu-grupo">
          SEGUNDOS
          <hr></hr>
          <li>Plato 1</li>
          <li>Plato 2</li>
          <li>Plato 3</li>
        </ul>
        <ul className="lista-menu-grupo">
          POSTRES
          <hr></hr>
          <li>Postre 1</li>
          <li>Postre 2</li>
          <li>Postre 3</li>
        </ul>
      </article>
      <div className="card-deck d-flex flex-row justify-content-around align-content-center w-75 h-75 ">
        <div class="card d-">
          <img src={ImgMenuLlevar1} class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"> </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <a href="/menus">
            <button type="button" className="btn btn-secondary mt-3  btn-lg">VER</button>
            </a>
          </div>
        </div>
        <div className="card ">
          <img src={ImgMenuLlevar2} class="card-img-top" alt="..." />
          <div class="card-body ">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"></p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <a href="/menus">
            <button type="button" className="btn btn-secondary mt-3  btn-lg">VER</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img src={ImgMenuLlevar3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"></p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <a href="/menus">
            <button type="button" className="btn btn-secondary mt-3  btn-lg">VER</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuGrupos;
