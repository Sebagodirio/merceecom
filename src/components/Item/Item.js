import React from 'react'
import libro from "../Item/img/indice.jpg"

export const Item = (props) => {
    const {title,description} = props
    return (
        <div className="card p-2">
            <img src={libro} class="card-img-top" alt="foto" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="./" class="btn btn-danger">Agregar al carrito</a>
            </div>
        </div>
    )
}

export default Item;
