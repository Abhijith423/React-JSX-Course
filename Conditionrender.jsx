//Condition rendering in react means, if elseif else conditional statements in javascript

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a=10;
  const CheckNumber=()=>{
    if(a>0){
      return <h1>Positive Number</h1>
    }
    else if(a<0){
      return <h1>Negative Number</h1>
    }
    else{
      return <h1>Zero</h1>
    }
  }
  return (
    <>
    <CheckNumber/>
     
    </>
  )
}

export default App


//we can write these condition rendering in a single line and get time efficient by using this method

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a=1
  var num=2
  return (
    <>
    {a>0?<h1>positive</h1>:a<0?<h1>negative</h1>:<h1>zero</h1>}
    {num%2==0?<h1>even</h1>:<h1>odd</h1>}

    </>
  )
}

export default App
