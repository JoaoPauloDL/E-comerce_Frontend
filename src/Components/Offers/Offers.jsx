import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Ofertas</h1>
            <h1>Exclusivas para você</h1>
            <p>SÓ NOS PRODUTOS MAIS VENDIDOS</p>
            <button>Ver Ofertas</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  ) 
};

export default Offers;
