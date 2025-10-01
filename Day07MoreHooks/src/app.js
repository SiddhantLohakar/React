import  {useMemo, useRef, useState } from "react"
import ReactDOM from "react-dom/client"


 function calcFibonacci(number)
    {
        if(number <= 1)
            return number;


        return calcFibonacci(number-2) + calcFibonacci(number - 1)
    }

function App()
{

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0)
    const money = useRef(0);

    let result = useMemo(()=>calcFibonacci(number), [number])

    return (
        <>
            <h1>Counter is {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <br/>
            <br/>
            <h2>Fibonacci of the number {number} is: {result} </h2>
            <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
            <h3>Money is {money.current}</h3>
             <button onClick={()=>money.current+=1}>Increment</button>
        </>
    )
}


const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<App/>)