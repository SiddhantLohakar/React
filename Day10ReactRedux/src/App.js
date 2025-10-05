import React from "react";
import ReactDOM from "react-dom/client"
import Counter from "./Components/Counter/Counter";
import "./App.css"
import { Provider } from "react-redux";
import store from "./app/Store";

function App(){
    return (
       <Provider store={store}>
        <Counter/>
       </Provider>
    )
}


const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<App/>)