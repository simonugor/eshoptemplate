import React from "react"
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

import "./Product.css"

const Product = (props) => {

    var image;
    if (props.src === "White T-Shirt") {
        image = WhiteTshirt
    } else if (props.src === "White Hoodie") {
        image = WhiteHoodie
    } else if (props.src === "Red T-Shirt") {
        image = RedTshirt
    } else if (props.src === "Black T-shirt") {
        image = BlackTshirt
    } else if (props.src === "Black Hoodie") {
        image = BlackHoodie
    } else if (props.src === "Red Hoodie") {
        image = RedHoodie
    } else if (props.src === "White Pants") {
        image = WhitePants
    } else if (props.src === "Black Pants") {
        image = BlackPants
    } else if (props.src === "Gray Pants") {
        image = GrayPants
    } else if (props.src === "Gray T-Shirt") {
        image = GrayTshirt
    }

    const clicked = () => {
        props.click(props.productName)
    }

    return (
        <div className="product" onClick={clicked}>
            <img className="product_image" alt="product_img" src={image}></img>
            <p>{props.productName}</p>
            <p>{props.productPrice}</p>
        </div>
    )
}

export default Product