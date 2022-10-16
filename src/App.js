import React,{useState} from 'react'
import './App.css';
import {BiCalculator} from 'react-icons/bi';

const App = () => {
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }
  const resultRender = () => {


    try {
      setResult(eval(input))

    }
    catch {
      setResult("Error")

    }


  }

  return (
    <div className="container">
      <center>
        <h2 className="heading">Calculator App <BiCalculator /></h2>
        <input type="text" value={input} name="input" onChange={handler} />
        <br />
        {/*<button className="button-result" onClick={() => setResult(eval(input))}>Result</button> */}
         <button className="button-result" onClick={resultRender}>Result</button> 
        <h4 className="result-heading">Result is : {result}</h4>

        <button onClick={() => setInput(input+'1')}>1</button>
        <button onClick={() => setInput(input+'2')}>2</button>
        <button onClick={() => setInput(input+'3')}>3</button>
        <button onClick={() => setInput(input+'4')}>4</button>
        <button onClick={() => setInput(input+'5')}>5</button> <br />
        
        <button onClick={() => setInput(input+'6')}>6</button>
        <button onClick={() => setInput(input+'7')}>7</button>
        <button onClick={() => setInput(input+'8')}>8</button>
        <button onClick={() => setInput(input+'9')}>9</button>
        <button onClick={() => setInput(input+'0')}>0</button> <br />

        <button onClick={() => setInput(input+'+')}>+</button>
        <button onClick={() => setInput(input+'-')}>-</button>
        <button onClick={() => setInput(input+'*')}>*</button>
        <button onClick={() => setInput(input+'/')}>/</button>
    
        <button onClick={() => {setInput('');setResult(0)}}>C</button><br /> 

      </center>
      <br />
    </div>
  )
}

export default App;