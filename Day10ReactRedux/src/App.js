import React from "react";
import ReactDOM from "react-dom/client"
import Counter from "./Components/Counter";
import "./App.css"

function App(){
    return (
       <>
        <Counter/>
       </>
    )
}


const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<App/>)