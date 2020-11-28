import React from "react"

import "./Header.css"

const Header = () => {
    return(
        <div className="header_div">
            <div className="content_div">
                <nobr className="header_red">E-mail:&nbsp;</nobr>
                <nobr className="email">simiugor@gmail.com</nobr>
                <nobr className="header_red">Phone:&nbsp;</nobr>
                <nobr className="test">00421 907 573 853</nobr>
            </div>
        </div>
    )
}

export default Header