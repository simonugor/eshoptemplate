import React from "react"
//importing components
import Product from "../Product/Product"
//importing link from react router
import { Link } from "react-router-dom"

import "./searchedItems.css"

const searchedItems = (props) => {

    const handleClick = (product) => {
        props.productClick(product)
    }

    const p = props.data.map(d => {
        return (<Link to="/productpage"><Product key={d.name} id={d.name} productName={d.name} productPrice={d.price} src={d.name} click={handleClick} /></Link>)
    })

    if (p.length > 3) {
        return (
            <div className="main_div">
            <div className="sub_div_searched">
                <h1>Search</h1>
            </div>
            <div className="products_div">
                {p.slice(0, p.length/2)}
            </div>
            <div className="products_div">
                {p.slice(p.length/2, p.lenght)}
            </div>
        </div>
        )
    } else {
        return (
            <div className="main_div">
            <div className="sub_div_searched">
                <h1>Search</h1>
            </div>
            <div className="products_div">
                {p}
            </div>
        </div>
        )
    }

}

export default searchedItems