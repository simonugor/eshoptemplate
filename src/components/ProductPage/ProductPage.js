import React from "react"

import "./ProductPage.css"

//importing react router
import { Link } from "react-router-dom"

//importing images
import WhiteTshirt from "../../images/tshirt.png"
import RedTshirt from "../../images/redtshirt.png"
import BlackTshirt from "../../images/blacktshirt.png"
import GrayTshirt from "../../images/graytshirt.png"
import WhiteHoodie from "../../images/hoodie.png"
import BlackHoodie from "../../images/blackhoodie.png"
import RedHoodie from "../../images/redhoodie.png"
import WhitePants from "../../images/pants.png"
import BlackPants from "../../images/blackpants.png"
import GrayPants from "../../images/graypants.png"

const ProductPage = (props) => {

    var image;
    if (props.heading === "White T-Shirt") {
        image = WhiteTshirt
    } else if (props.heading === "White Hoodie") {
        image = WhiteHoodie
    } else if (props.heading === "Red T-Shirt") {
        image = RedTshirt
    } else if (props.heading === "Black T-shirt") {
        image = BlackTshirt
    } else if (props.heading === "Black Hoodie") {
        image = BlackHoodie
    } else if (props.heading === "Red Hoodie") {
        image = RedHoodie
    } else if (props.heading === "White Pants") {
        image = WhitePants
    } else if (props.heading === "Black Pants") {
        image = BlackPants
    } else if (props.heading === "Gray Pants") {
        image = GrayPants
    } else if (props.heading === "Gray T-Shirt") {
        image = GrayTshirt
    }

    const addToCart = () => {
        props.cartAdd(props.heading, props.price)
    }

    const addToWishlist = () => {
        props.wishlistAdd(props.heading, props.price)
    }

    return(
        <div className="main_div">
            <div className="product_page_subdiv">
                <h1 className="product_page_heading">{props.heading}</h1>
                <div className="product_page_left">
                    <img alt="product_img" src={image} className="product_page_img"></img>
                </div>
                <div className="product_page_right">
                    <p className="price_heading">Price:</p>
                    <p className="price">{props.price}</p>
                    <p className="description_heading">Description:</p>
                    <p className="description">{props.description}</p>
                    <button onClick={addToWishlist} className="add_to_wishlist">Add to Wishlist</button>
                    <button onClick={addToCart} className="add_to_cart">Add to Cart</button>
                    <br/>
                    <Link to="/eshoptemplate/" onClick={props.goBack}>
                        <button className="back_button">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductPage