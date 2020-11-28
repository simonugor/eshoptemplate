import React, { useState } from "react"

//importing react router
import { Link } from "react-router-dom"

import "./Navbar.css"

function Navbar(props) {

    const [searchText, setSearchText] = useState("")

    const cartClick = () => {
        props.cartColor()
    }

    const wishlistClick = () => {
        props.wishlistColor()
    }

    const handleChange = (event) => {
        setSearchText(event.target.value)
    }

    const handleSubmit = () => {
        props.handleSearch(searchText)
    }

    return (
        <div className="navbar_div">
            <div className="logo_div">
                <p>Company Logo</p>
            </div>
            <div className="search_div">
                <form>
                    <input onChange={handleChange} className="textbox" type="textbox" placeholder="Search"></input>
                    <Link to="/search">
                        <button onClick={handleSubmit} className="search_button">Search</button>
                    </Link>
                </form>
            </div>
            <div className="cart_div">
                <Link to="/wishlist" className="navbar_link">
                    <nobr style={{color: props.wishlistStyle}} className="wishlist" onClick={wishlistClick}>wishlist</nobr>
                </Link>
                <Link to="/cart" className="navbar_link">
                    <nobr style={{color: props.cartStyle}} className="cart" onClick={cartClick}>cart</nobr>
                </Link>
            </div>
        </div>
    )
}

export default Navbar