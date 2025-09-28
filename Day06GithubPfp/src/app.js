import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css"
import Header from "./Components/Header";
import Body from "./Components/Body";

function App()
{
    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<App/>)