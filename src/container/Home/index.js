import React from 'react'
import './style.css'
import MainDiv from '../mainDiv'
import SideDiv from '../sideDiv'

export default function Home(props) {
    return (
        <div className="container home">
            <div className="row">
            <MainDiv {...props}/>
            <SideDiv/>
            </div>
        </div>
    )
}
