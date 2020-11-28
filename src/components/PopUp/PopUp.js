import React from "react"

import "./PopUp.css"

const PopUp = (props) => {
    return (
        <div className="popup_container" style={{display: props.display}}>
            <div className="popup_div">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default PopUp