import React from 'react'
import Card from '../../components/card'
import './style.css'
export default function sideDiv() {
    return (
        <div className="sideDiv class-4 shadow p-3 mb-5 rounded text-center">
            <Card name="0" imgLink="main.png"/>
            <Card name="1"/>
            <Card name="3"/>
            <Card name="4"/>
        </div>
    )
}

