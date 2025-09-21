import React from "react"
import ReactDOM from 'react-dom/client'

// const element1 = React.createElement('h1', {id:"header", className: "heading", style: {backgroundColor:"orange", color:"white", fontSize:"32px", padding:"10px"}}, "My name is Siddhant Lohakar" )
// const element2 = React.createElement('h2', {id:"header2", className: "heading", style: {backgroundColor:"blue", color:"white", fontSize:"28px", padding:"10px"}}, "I am learning react");
// const div = React.createElement('div', {id:"container", style: {backgroundColor:"black", padding:"20px", border:"1px solid white"}}, [element1, element2]);

const new_element = <h1>Hello World</h1> // Single elemenet writing in jsx

// storing multiple_elements in a single variable
const name = "Siddhant Lohakar"
const multi_element = (
<>
    <h1>Hello, How are you?</h1>
    <h2>{name}</h2>
</>
)


// Returning JSX from function
function greet()
{
    return <h1>Hello, {name}</h1>
}


const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(greet());
