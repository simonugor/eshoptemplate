import React from "react"

import "./Cart.css"

//importing componetns
import CartItem from "./CartItem/CartItem.js"

const Cart = (props) => {

    const callDelete = (name) => {
        props.deleteItem(name)
    }

    const items = props.data.map(d => {
        if (props.data.length !== 0) {
            return (<CartItem name={d.name} price={d.price} handleClick={callDelete} />)
        } else {
            return (<h2>Your cart is empty</h2>) //not working
        }
    })

    const checkout = () => {
        alert("This is only template. Checkout is not possible.")
    }

    return (
        <div className="main_div">
            <div className="subdiv_cart">
                <h1 className="cart_heading">Cart</h1>
                {items}
                <button onClick={checkout} className="checkout_button">Checkout</button>
            </div>
        </div>
    )
}

export default Cart