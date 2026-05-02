import React from 'react'
import {useState} from 'react'
const App = () => {
    const [Counter, setCounter]= useState(0);
    function increaseCounter(){
        setCounter(Counter+1)
    }
  return (
    <>
      <h1>Count Value:{Counter}</h1>
      <button onClick={increaseCounter}>Inc Counter</button>
    </>
  )
}

export default App
