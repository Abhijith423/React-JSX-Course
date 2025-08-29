Onclick Event
OnDoubleClick event
OnKeyDown event             //point to note:  (These events are written in camel case letters)
OnChange event
onMouseOver event


import React from 'react'
import {Button, Table, Alert,Card,Nav} from 'react-bootstrap' 

const Home = () => {
  const onclick=()=>{
    alert("Button Clicked")
  }
  const submit=()=>{
    console.log("Hello Abhi")
  }
   const dbsubmit=()=>{
    alert("Database Connected")
   }
    const onchange=(name)=>{
    alert("Demo you have an alert")
  }
  const onMouseover=(name)=>{
    alert("Hi its demo of on mouse over")
  }
  const keydown=(name)=>{
    alert("Key down event")
  }
  
  
  return (
    <>
    <h1>Welcome to Home Page</h1>
    <button onClick={onclick}>Click</button>
    <button onClick={submit}>Submit</button>
    <button onDoubleClick={dbsubmit}>Database Connected</button>
    <input onChange={onchange} type="text" placeholder='Enter your name'/>
    <h1 onMouseOver={onMouseover}>Mouse over</h1>
    <input onKeyDown={keydown} type="text" placeholder='Enter your name'/>
    </>
    
  )
}

export default Home
