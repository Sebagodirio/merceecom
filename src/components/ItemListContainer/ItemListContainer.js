import React from 'react'
import ItemList from '../ItemList/ItemList'
export const ItemListContainer = (props) => {
    const {greeting, description} = props
    return (
        <ItemList greeting={greeting} description={description} price="1600" />
    )
}

export default ItemListContainer;
