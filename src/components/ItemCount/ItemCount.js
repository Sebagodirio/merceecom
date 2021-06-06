import React,{useState} from 'react'
import "./itemCount.css"
import plus from "./img/plus.png"
import minus from "./img/minus.png"

export const ItemCount = (props) => {
    const {stock,initial} = props
    const [counter, setCounter] = useState(initial || 0);

    const handleSumar = () => {
        counter < stock && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > 0 && setCounter(counter - 1)
    }

    const validarNumero = () => {
        (counter > stock || counter < 0) && setCounter(0);
    }
    return (
        <div className="main-box">
            <div className="main-box__subBox sumar click" onClick={handleSumar}>
                <img src={plus} alt="img"/>
            </div>
            <div className="main-box__subBox numero">
                <p onChange={validarNumero}>{counter}</p>
            </div>
            <div className="main-box__subBox restar click" onClick={handleRestar}>
                <img src={minus} alt="img" />
            </div>
        </div>
    )
}

export default ItemCount;
