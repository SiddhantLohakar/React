import React, {useState, useRef} from "react";
import ReactDOM from "react-dom/client"


function App()
{
    const [seconds, setSeconds] = useState(0);
    const intervalId = useRef(null)

    function start()
    {
        if(!intervalId.current)
        {
                 intervalId.current = setInterval(()=>{
                 setSeconds((prevSecond)=>prevSecond+1)
                 }, 1000)
        }
       
    }

    function stop()
    {
        if(intervalId.current)
        {

            clearInterval(intervalId.current)
            intervalId.current = null;
        }
    }

    function reset()
    {
        if(intervalId.current)
        {

            clearInterval(intervalId.current)
            intervalId.current = null;
        }
        setSeconds(0);
    }

    return (
        <>

            <h1>Stopwatch Seconds: {seconds}</h1>
            <button onClick={start}>Start</button>
            <br />
            <button onClick={stop}>Stop</button>
            <br />
            <button onClick={reset}>Reset</button>
        </>
    )
}


const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<App/>)