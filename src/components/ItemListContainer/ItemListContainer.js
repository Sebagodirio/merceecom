import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
export const ItemListContainer = (props) => {
    const {greeting, description} = props
    const {name} = useParams()
    
    return (
        <ItemList greeting={greeting} description={description} price="1600" catName={name || ""}/>
    )
}

export default ItemListContainer;
