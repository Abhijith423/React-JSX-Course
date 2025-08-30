// Applying React  Keys for calling a particular component using that key track using that keys.

Prop.jsx

import React, { useState } from 'react'

const Props = ({states}) => {
  const [state,setState]=useState(states)
  const changeQuantity=(id)=>{
    console.log(id)
  }
  return (
    
    <>
    
    {states.map((state)=>
    <div className="bg-danger" text="white" p={2} mb={2} key={state.id}>
        <h1>name: {state.name}</h1>
        <h4>semester: {state.semester}</h4>
        <h3>branch: {state.branch}</h3>
        <button onClick={()=>changeQuantity(state.id)}type="button">+</button>
      </div>
    )}
    </>
  )
}
  
export default Props

App.jsx

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Props from './components/Props'
import { Container } from 'react-bootstrap'

function App() {
  const states=[
    {id:"1",name:"Abhishek",semester:"3rd",branch:"CSE"},
    {id:"2",name:"Vishnu",semester:"3rd",branch:"CE"},
    {id:"3",name:"Akhil",semester:"3rd",branch:"ME"},
    {id:"4",name:"Anil",semester:"3rd",branch:"EE"}
  ]
  return(

 <div className="App">
  <Container>
  <Props states={states} />
  </Container>
  </div>
);
}

export default App

