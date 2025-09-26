 import { useState, useEffect, useMemo } from "react"; 
 import ReactDOM from "react-dom/client";
 import BgChanger from "./Component/BgChanger";
 import "./style.css"





 function App()
 {
    const [count, setCount] = useState(0);



    return  (
        <>
            <div className="main">
                <BgChanger/>
                <h1>Count: {count}</h1>
                <div className="incre-decre-btn">
                    <button className="incre" onClick={()=> setCount(count+1)}>Increment</button>
                    <button className="decre" onClick={()=> setCount(count-1)}>Decrement</button>

                </div>
            </div>
           
        </>
    )
 }


 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<App/>)

