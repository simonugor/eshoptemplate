import React from "react"

//importing components
import Category from "../Category/Category.js"
import Product from "../Product/Product.js"

//importing react router
import { Link } from "react-router-dom"

import "../body.css"

const Home = (props) => {

    const tshirtsClick = () => {
        props.changeStyle("tshirts")
    }

    const hoodiesClick = () => {
        props.changeStyle("hoodies")
    }

    const pantsClick = () => {
        props.changeStyle("pants")
    }

    const handleClick = (product) => {
        props.productClick(product)
    }

    const p = props.data.map(d => {
        if (d.new === true) {
            return (<Link to="/productpage"><Product key={d.name} id={d.name} productName={d.name} productPrice={d.price} src={d.name} click={handleClick} /></Link>)
        } else {
            return null
        }
    })

    return(
        <div className="main_div">
            <div className="sub_div">
                <Link onClick={tshirtsClick} className="link_category" to="/tshirts">
                    <Category name="T-shirts Collection" id="tshirt" />
                </Link>

                <Link onClick={hoodiesClick} className="link_category" to="/hoodies">
                    <Category name="Hoodies Collection" id="hoodie" />
                </Link>
                
                <Link onClick={pantsClick} className="link_category" to="/pants">
                    <Category name="Pants Collection" id="pantsCollection" />
                </Link>
            </div>
            <div className="sub_div2">
                <h2>NEW PRODUCTS</h2>
            </div>
            <div className="products_div">
                {p.slice(0, 6)}
            </div>
        </div>
    )
}

export default Home