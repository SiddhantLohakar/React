import React from "react";
import context from "../context";
import { useContext } from "react";

function Button()
{
    const {count, setCount} = useContext(context)
    return(
        <button onClick={()=>setCount(count+1)}>Increment</button>
    )
}

export default Button