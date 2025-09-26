import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client"
import "./app.css"

function App()
{
    const [passoword, setPassword] = useState("");

    return <>
        <h1>Your Password: {passoword}</h1>
        <div className="inputs">
            <div className="length">
            <input type="range" name="password-length" id="length" />
            <label htmlFor="length">Length: {length}</label>
            </div>


            <div>
            <input type="checkbox" name="" id="number" />
            <label htmlFor="number">Number</label>
            </div>

            <div>
            <input type="checkbox" name="" id="characters" />
            <label htmlFor="characters">Character</label>
            </div>
        </div>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);