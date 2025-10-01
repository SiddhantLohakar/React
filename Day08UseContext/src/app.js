import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import context from "./context";
import Counter from "./Components/Counter";


function App()
{
    const [count, setCount] = useState(0)
    return (
        <>
       
        <h1>Hello World</h1>
        <context.Provider value={{count, setCount}}>
             <Counter/>
        </context.Provider>
         </>
    )
}


const ReactRoot =  ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(
    <App/>

)

