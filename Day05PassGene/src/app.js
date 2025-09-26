import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client"
import "./app.css"

function App()
{
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [includeNumber, setIncludeNumber] = useState(false)
    const [includeCharacter, setIncludeCharacter] = useState(false)

    function generatePassword()
    {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(includeNumber)
        str+="0123456789"

        if(includeCharacter)
        str+="/?><(){[]}!@#$%^&*-==_+|";

        let pass = ""

        for(let i=0; i<length; i++)
        {
            pass+= str[Math.floor(Math.random() * str.length)]
        }

        setPassword(pass);
    }

    useEffect(()=>{
         generatePassword()
    }, [length, includeCharacter, includeNumber])
   


    return <>
        <h1>Your Password: {password}</h1>
        <div className="inputs">
            <div className="length">
            <input type="range" name="password-length" id="length" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
            <label htmlFor="length">Length: {length}</label>
            </div>


            <div>
            <input type="checkbox" name="" id="number" defaultChecked={includeNumber} onChange={()=>{setIncludeNumber(!includeNumber)}}/>
            <label htmlFor="number">Number</label>
            </div>

            <div>
            <input type="checkbox" name="" id="characters" defaultChecked={includeCharacter} onChange={()=>{setIncludeCharacter(!includeCharacter)}}/>
            <label htmlFor="characters">Character</label>
            </div>
        </div>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);