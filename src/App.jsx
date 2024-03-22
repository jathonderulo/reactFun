import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const num1 = parseInt(event.target.elements.num1.value);
    const num2 = parseInt(event.target.elements.num2.value);
    console.log("Thrello");
    let resultValue = null;
    if (num1 && num2) 
      resultValue = useOperation(num1, num2);
    else 
      resultValue = "?";

    setResult(`Result: ${resultValue}`);
  }

  function useOperation(n1, n2) {
    switch (operation) {
      case "mul": return n1*n2;
      case "add": return n1+n2;
      case "sub": return n1-n2;
      case "div": return n1/n2;
      case "sqr": return n1**n2;
      case "xor": return n1^n2;
    }
  }

  return (
    <>  
        <div>
          <form id="myForm" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="num1">Enter int 1: </label>
            <input type="text" id="num1" name="num1" />
            <br />
            <label htmlFor="num2">Enter int 2:</label>
            <input type="text" id="num2" name="num2" />
            <br />
            <button type="submit">Submit</button>
          </form>

          <br />

          <div id="operations">
            <button className="operation-button" onClick={() => setOperation("mul")}>mul</button>
            <button className="operation-button" onClick={() => setOperation("add")}>add</button>
            <button className="operation-button" onClick={() => setOperation("sub")}>sub</button>
            <button className="operation-button" onClick={() => setOperation("div")}>div</button>
            <button className="operation-button" onClick={() => setOperation("sqr")}>sqr</button>
            <button className="operation-button" onClick={() => setOperation("xor")}>xor</button>
          </div>
        </div>
        <br />
        <div>{operation}</div>
        <div>{result}</div>
    </>
  )
}

export default App
