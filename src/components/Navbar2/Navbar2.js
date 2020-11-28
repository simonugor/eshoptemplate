import React from "react"

//importing react router
import { Link } from "react-router-dom"

//importing css
import "./Navbar2.css"

const Navbar2 = (props) => {

    const setProductsStyle = (event) => {
        props.changeStyle(event.target.id)
    }

    return(
        <div className="navbar2_div">
            <div className="content2_div">
                <Link onClick={setProductsStyle} className="link" to="/eshoptemplate/">
                    <nobr id="home" style={{color: props.homeStyle}} className="home">Home</nobr>
                </Link>

                <Link onClick={setProductsStyle} className="link" to="/products">
                    <nobr id="products" style={{color: props.productsStyle}} className="products">Products</nobr>
                </Link>

                <Link onClick={setProductsStyle} className="link" to="/tshirts">
                    <nobr id="tshirts" style={{color: props.tshirtsStyle}} className="tshirts">T-shirts</nobr>
                </Link>

                <Link onClick={setProductsStyle} className="link" to="/hoodies">
                    <nobr id="hoodies" style={{color: props.hoodiesStyle}} className="hoodies">Hoodies</nobr>
                </Link>

                <Link onClick={setProductsStyle} className="link" to="/pants">
                    <nobr id="pants" style={{color: props.pantsStyle}} className="pants">Pants</nobr>
                </Link>

            </div>
        </div>
    )
}

export default Navbar2