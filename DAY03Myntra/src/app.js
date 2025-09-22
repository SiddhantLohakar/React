import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./Component/Card";
import "./app.css"
import arr from "./utils/data";

// Header
// Body
// Footer

function App()
{
    return (
       <>
            <div className="cards">
                {arr.map((value, index)=>  <Card key = {index} clothName = {value.clothName} Offer = {value.Offer}/>)}
            </div>
       </>
    )

}


const ReactRoot =  ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(App());