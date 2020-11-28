import React from "react"
//importing components
import Product from "../Product/Product"
//importing link from react router
import { Link } from "react-router-dom"

import "../body.css"

const Hoodies = (props) => {

    const handleClick = (product) => {
        props.productClick(product)
    }

    const p = props.data.map(d => {
        if (d.type === "hoodie") {
            return (<Link to="/productpage"><Product key={d.name} id={d.name} productName={d.name} productPrice={d.price} src={d.name} click={handleClick} /></Link>)
        } else {
            return null
        }
    })

    return(
        <div className="main_div">
            <div className="sub_div_products">
                <h1>HOODIES</h1>
            </div>
            <div className="products_div">
                {p}
            </div>
        </div>
    )
}

export default Hoodies