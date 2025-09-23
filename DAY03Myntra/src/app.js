import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./Component/Card";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./app.css"
import arr from "./utils/data";

// Header
// Body
// Footer

function App()
{
    return (
       <>
            <Header/>
            <div className="cards">
                {arr.map((value, index)=>  <Card key = {index} clothName = {value.clothName} Offer = {value.Offer} price={value.price} src={value.src}/>)}
            </div>
            <Footer/>
       </>
    )

}


const ReactRoot =  ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(App());