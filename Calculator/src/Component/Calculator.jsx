import { useState } from "react";
import Button from "./Button";


const Calculator = () => {
    const [input,setInput] = useState("")
    const [result,setResult] = useState("")

    const handleInput = (value)=>{
        setInput(input + value)
    }
    const calculateResult = ()=>{
        try {
            setResult(eval(input))
        } catch (error) {
            setResult("ERROR")
        }
    }
    const clearInput = ()=>{
        setInput("")
        setResult("")
    }
    const deleteLast = ()=>{
        setInput(input.slice(0,-1))
    }
  return (
    <div className="calculator">
      <div className="input">
        <h2>Input</h2>
        <input type="text" placeholder="0" value={input} />
        <h2>Result</h2>
        <input type="text" placeholder="0" value={result} />
      </div>
      
      <div className="buttons">
        {/* <button onClick={clearInput}> AC </button>
        <button onClick={deleteLast}> DEL </button>
        <button onClick={()=>{handleInput("-")}}> - </button>
        <button onClick={()=>{handleInput("+")}}> + </button>

        <button onClick={()=>{handleInput("7")}}> 7 </button>
        <button onClick={()=>{handleInput("8")}}> 8 </button>
        <button onClick={()=>{handleInput("9")}}> 9 </button>
        <button onClick={()=>{handleInput("/")}}> / </button>

        <button onClick={()=>{handleInput("4")}}> 4 </button>
        <button onClick={()=>{handleInput("5")}}> 5 </button>
        <button onClick={()=>{handleInput("6")}}> 6 </button>
        <button onClick={()=>{handleInput("*")}}> x </button>

        <button onClick={()=>{handleInput("1")}}> 1 </button>
        <button onClick={()=>{handleInput("2")}}> 2 </button>
        <button onClick={()=>{handleInput("3")}}> 3 </button>
        <button onClick={()=>{handleInput(".")}}> . </button>

        <button onClick={()=>{handleInput("0")}}> 0 </button>
        <button onClick={calculateResult} style={{gridColumn: "span 3"}}> = </button> */}
        <Button func={clearInput} value={"AC"} />
        <Button func={deleteLast} value={"DEL"} />
        <Button func={handleInput} value={"-"} />
        <Button func={handleInput} value={"+"} />
        
        <Button func={handleInput} value={"7"} />
        <Button func={handleInput} value={"8"} />
        <Button func={handleInput} value={"9"} />
        <Button func={handleInput} value={"/"} />
        
        <Button func={handleInput} value={"4"} />
        <Button func={handleInput} value={"5"} />
        <Button func={handleInput} value={"6"} />
        <Button func={handleInput} value={"x"} />
        
        <Button func={handleInput} value={"1"} />
        <Button func={handleInput} value={"2"} />
        <Button func={handleInput} value={"3"} />
        <Button func={handleInput} value={"."} />
        
        <Button func={handleInput} value={"0"} />
        <Button func={calculateResult} value={"="} />

      </div>
    </div>
  );
};

export default Calculator;
