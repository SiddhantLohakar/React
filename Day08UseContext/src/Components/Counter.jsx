import React, { useContext } from "react";
import Button from "./Button"
import context from "../context";


function Counter()
{
    const {count, setCount} = useContext(context)
    return(
        <>
            <h2>The counter is {count}</h2>
            <Button></Button>
        </>
    )
}

export default Counter