import React,{useState} from 'react'
import './style.css'
import Card from '../../components/card'

export default function MainDiv(props) {
    //console.log("props is "+props.match.params.paramId);
    //const [state, setstate] = useState("5");
    //setstate(props.match.params.paramId);
    return (
        <div className="mainDiv col-8 shadow p-3 mb-5 rounded text-center flex-container h-auto d-inline-block">
            <Card name="2" imgLink={props.match.params.paramId}/>
        </div>
    )
}
