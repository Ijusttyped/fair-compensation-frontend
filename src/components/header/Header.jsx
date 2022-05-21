import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <header>
            <div className={"container header__container"}>
                <h1>Estimate your salary</h1>
                <h5>Utilize machine learning and data from surveys to estimate you salary.</h5>
            </div>
        </header>
    )
}

export default Header