import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

    
    const addValue = () => { 
      if(counter === 20){
        setCounter(20);
      }else{
        setCounter(counter+1);
        console.log("value added", counter);   
      }
    }

    const subtractVal = () => {
      if(counter > 0){
        setCounter(counter-1);
        console.log("value subtracted", counter);
      }
      else{
        setCounter(0);
      }
    }


  return (
    <>
     
      <h1>learning react hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button> 
      <br />
      <button onClick={subtractVal}>Subtract Value</button>
      
    </>
  )
}

export default App
