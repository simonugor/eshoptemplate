import React from "react"

//importing images
import trash from "../../../images/trash.png"
import cart from "../../../images/cart.png"
//importing product images
import WhiteTshirt from "../../../images/tshirt.png"
import RedTshirt from "../../../images/redtshirt.png"
import BlackTshirt from "../../../images/blacktshirt.png"
import GrayTshirt from "../../../images/graytshirt.png"
import WhiteHoodie from "../../../images/hoodie.png"
import BlackHoodie from "../../../images/blackhoodie.png"
import RedHoodie from "../../../images/redhoodie.png"
import WhitePants from "../../../images/pants.png"
import BlackPants from "../../../images/blackpants.png"
import GrayPants from "../../../images/graypants.png"

const WishlistItem = (props) => {

    var image;
    if (props.name === "White T-Shirt") {
        image = WhiteTshirt
    } else if (props.name === "White Hoodie") {
        image = WhiteHoodie
    } else if (props.name === "Red T-Shirt") {
        image = RedTshirt
    } else if (props.name === "Black T-shirt") {
        image = BlackTshirt
    } else if (props.name === "Black Hoodie") {
        image = BlackHoodie
    } else if (props.name === "Red Hoodie") {
        image = RedHoodie
    } else if (props.name === "White Pants") {
        image = WhitePants
    } else if (props.name === "Black Pants") {
        image = BlackPants
    } else if (props.name === "Gray Pants") {
        image = GrayPants
    } else if (props.name === "Gray T-Shirt") {
        image = GrayTshirt
    }

    const addToCart = () => {
        props.handleClick(props.name, props.price)
    }

    const deleteItem = () => {
        props.handleDeleteClick(props.name)
    }

    return (
        <div className="cart_item_div">
            <div className="cart_image_div">
                <img className="cart_product_img" alt="product_img" src={image}></img>
            </div>
            <div className="cart_name_div">
                <nobr>{props.name}</nobr>
            </div>
            <div className="cart_price_div">
                <nobr>{props.price}</nobr>
            </div>
            <div className="delete_image_div">
                <img className="trash_img" alt="trash" onClick={addToCart} src={cart}></img>
            </div>
            <div className="delete_image_div">
                <img onClick={deleteItem} className="trash_img" alt="trash" src={trash}></img>
            </div>
        </div>
    )
}

export default WishlistItem