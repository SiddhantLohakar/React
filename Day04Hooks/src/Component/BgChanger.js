import React, { useState, useEffect } from "react"

function BgChanger()
{

    const [color, setColor] = useState("black")

    useEffect(()=>{
        document.body.style.backgroundColor = color;
       
    }, [color])
    
    console.log("rendering")

    return (
            <div className="color-btn-container">
                <button onClick={()=>{setColor("red")}} className="red btn">RED</button>
                <button onClick={()=>{setColor("green")}} className="green btn">GREEN</button>
                <button onClick={()=>{setColor("yellow")}} className="yellow btn">YELLOW</button>
                <button onClick={()=>{setColor("blue")}} className="blue btn">BLUE</button>
            </div>

    )
}

export default React.memo(BgChanger)