useState Hook Function Hook functions can be use to change font written to another declared font or to perform count operations etc ,Hook function is typicalle staart with use,and useState is a type of hook function


import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'                    //(rafce function)

const Demo = () => {
   const[colour,setColour]=useState('aqua')
   const changeColor=()=>{
    setColour('blue')
   }
   const[count,setCount]=useState(0)
   const increment=()=>{
    setCount(count+1)
   }
    const decrement=()=>{
        setCount(count-1)
    }

  return (
    <>
    <h1>My favourite color is {colour}</h1>
    <Button onClick={changeColor}> Change colour</Button>
    <h1>set the {count}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </>
  )
}


export default Demo
