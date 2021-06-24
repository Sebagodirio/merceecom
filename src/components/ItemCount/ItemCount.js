import React, { useState } from "react";
import "./itemCount.css";
import plus from "./img/plus.png";
import minus from "./img/minus.png";
import Cart from "../Cart/Cart";

export const ItemCount = (props) => {
  const { stock, initial } = props;
  const [counter, setCounter] = useState(initial || 0);
  const [flag, setFlag] = useState(false);

  const onAdd = () => {
    setFlag(true)
  };
 
  const handleSumar = () => {
    if(counter < stock){
        setCounter(counter + 1)
        setFlag(false)
    }
  };
  
  const handleTerminarCompra = () => {
      //TODO
      <Cart />
  }

  const handleRestar = () => {
    if(counter > 0){
        setCounter(counter - 1)
        setFlag(false)
    }
  };

  const validarNumero = () => {
    (counter > stock || counter < 0) && setCounter(0);
  };
  return (
    <>
      <div className="main-box">
        <div className="main-box__subBox sumar click" onClick={handleSumar}>
          <img src={plus} alt="img" />
        </div>
        <div className="main-box__subBox numero">
          <p onChange={validarNumero}>{counter}</p>
        </div>
        <div className="main-box__subBox restar click" onClick={handleRestar}>
          <img src={minus} alt="img" />
        </div>
      </div>
      {<div className="mt-2">
        {flag === false ? (
          <button className="btn btn-primary btn-sm" onClick={(e) => onAdd(e)}>
            Agregar al carrito {counter} productos
          </button>
        ) : (
          <button className="btn btn-primary btn-sm" onClick={() => handleTerminarCompra()}>Terminar compra</button>
        )}
      </div>}
    </>
  );
};

export default ItemCount;