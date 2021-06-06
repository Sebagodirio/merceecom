import React from 'react'
import Item from "../Item/Item"
export const ItemListContainer = (props) => {
    const {greeting, description} = props
    return (
        <div className="d-flex flex-wrap justify-content-around container mt-5 mb-5" >
            {Array.apply(0, Array(10)).map(function () {
                return <Item title={greeting} description={description}/>
            })}
           
        </div>
    )
}

export default ItemListContainer;
