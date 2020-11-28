import React from "react"

import "./Wishlist.css"

//importing components
import WishlistItem from "./WishlistItem/WishlistItem.js"

const Wishlist = (props) => {

    const callAddToCart = (name, price) => {
        props.cartAdd(name, price)
    }

    const callDelete = (name) => {
        props.deleteItem(name)
    }

    const items = props.data.map(d => {
        if (props.data.length !== 0) {
            return (<WishlistItem name={d.name} price={d.price} handleClick={callAddToCart} handleDeleteClick={callDelete} />)
        } else {
            return (<h2>Your cart is empty</h2>) //not working
        }
    })

    return (
        <div className="main_div">
            <div className="subdiv_wishlist">
                <h1 className="cart_heading">Wishlist</h1>
                {items}
            </div>
        </div>
    )
}

export default Wishlist