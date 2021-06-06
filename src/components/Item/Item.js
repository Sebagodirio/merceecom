import React from 'react'
import libro from "../Item/img/indice.jpg"
import ItemCount from "../ItemCount/ItemCount"

export const Item = (props) => {
    const {title,description} = props
    return (
        <div className="card p-2 m-1">
            <img src={libro} className="card-img-top" alt="foto" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <ItemCount stock="10" initial=""/>
            </div>
        </div>
    )
}

export default Item;
