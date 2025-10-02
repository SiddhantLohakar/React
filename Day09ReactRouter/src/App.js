import React from "react";
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route, Link} from "react-router"
import  Home from "./Components/Home"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Meet from "./Components/Meet";

function App()
{
    return (
        <>
            <BrowserRouter>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact Us</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/About" element={<About/>}>
                        <Route path="Meet" element={<Meet/>}/>
                    </Route>
                </Routes>
            
            </BrowserRouter>

        </>
        
    )
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<App/>)