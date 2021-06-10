import React from 'react'
import ItemList from '../ItemList/ItemList'
export const ItemListContainer = (props) => {
    const {greeting, description} = props
    return (
        <ItemList greeting={greeting} description={description}/>
    )
}

export default ItemListContainer;
