import React from "react"

import "./Category.css"

const Category = (props) => {
    return (
        <div id={props.id} className="category_div">
            <p>{props.name}</p>
        </div>
    )
}

export default Category