import React,{useState} from 'react'
function Temp(props) {
    const [state, setstate] = useState(props.name);

    return (
        <div>
            {state}
            <button >button</button>
        </div>
    )
}

export default Temp;