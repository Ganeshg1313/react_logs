import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;

  let [counter, setCounter] = useState(0);


  /*

  Interview question to directly increase the value by 4 

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }
  */
  const increaseValue = () => {
    if(counter != 20){
      setCounter(++counter);
    }
  }

  const decreaseValue = ()=>{
    if(counter != 0){
      setCounter(--counter);
    }
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={increaseValue}>Increase Value {counter}</button>
      <br/>
      <br/>
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
      <br />
      <br />
      footer : {counter}
    </>
  )
}

export default App
