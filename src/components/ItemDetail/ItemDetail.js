import React from 'react'
import libro from "../ItemDetail/img/indice.jpg"
import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = (props) => {
    const {title,description,price} = props
    return (
        <div className="d-flex border w-50">
            <div>
                <img src={libro} className="card-img-top" alt="foto" />
            </div>
            <div className="card-body justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text fw-bold">${price}</p>
                <div>
                    <ItemCount stock="10" initial=""/>
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail;
