import React from 'react'
import "./style.css"
export default function Card(props) {
    return (
        <div className="outer-wrapper rounded-pill" >
            <div className="cardDiv">
                <img src={require("../../img/title.png")} alt="title" className="titleImg rotate rounded mx-auto d-block"/>
            </div>
        </div>
    )
}
