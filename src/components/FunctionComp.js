import React, { useState } from "react";

function FunctionComp(props) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{props.name}</p>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>прибавь</button>
            <button onClick={()=>{setCount(count-1)}}>отнеми</button>
            <button onClick={()=>{setCount(count*0)}}>сбрось</button>
        </div>
    )
}

export default FunctionComp