import React from 'react'
import logo from './img/shopping-cart.png'
import "./cartWidget.css"

export const CartWidget = () => {
    return (
        <>
            <img src={logo} alt="carrito" className="cart"/>
        </>
    )
}
