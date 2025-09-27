import React from "react";
import ReactDOM from "react-dom/client";

function App()
{
    return (
        <h1>Hello World</h1>
    )
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<App/>)