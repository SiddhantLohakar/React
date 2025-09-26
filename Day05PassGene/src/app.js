import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client"
import "./app.css"

function App()
{
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [includeNumber, setIncludeNumber] = useState(false)
    const [includeCharacter, setIncludeCharacter] = useState(false)



    return <>
        <h1>Your Password: {password}</h1>
        <div className="inputs">
            <div className="length">
            <input type="range" name="password-length" id="length" value={length}/>
            <label htmlFor="length">Length: {length}</label>
            </div>


            <div>
            <input type="checkbox" name="" id="number" defaultChecked={includeNumber}/>
            <label htmlFor="number">Number</label>
            </div>

            <div>
            <input type="checkbox" name="" id="characters" defaultChecked={includeCharacter}/>
            <label htmlFor="characters">Character</label>
            </div>
        </div>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);