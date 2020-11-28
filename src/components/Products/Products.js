import React from "react"
//importing components
import Product from "../Product/Product"
//importing link from react router
import { Link } from "react-router-dom"

import "./Products.css"

const Products = (props) => {

    const handleClick = (product) => {
        props.productClick(product)
    }

    const p = props.data.map(d => {
        return (<Link to="/productpage"><Product key={d.name} id={d.name} productName={d.name} productPrice={d.price} src={d.name} click={handleClick} /></Link>)
    })

    return(
        <div className="main_div">
            <div className="sub_div_products">
                <h1>ALL PRODUCTS</h1>
            </div>
            <div className="products_div">
                {p.slice(0, p.length/2)}
            </div>
            <div className="products_div">
                {p.slice(p.length/2, p.lenght)}
            </div>
        </div>
    )
}

export default Products