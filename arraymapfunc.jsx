// arraymap function which is used then we need to call array only one at a time and it can used  to display loop if more than 20 components etc present.

app.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Demo from './components/Demo'
import Props from './components/Props'
import { Container } from 'react-bootstrap'

function App() {
  const states=[
    {name:"Abhishek",semester:"3rd",branch:"CSE"},
    {name:"Vishnu",semester:"3rd",branch:"CE"},
    {name:"Akhil",semester:"3rd",branch:"ME"},
    {name:"Anil",semester:"3rd",branch:"EE"}
  ]
  return(

 <div className="App">
  <Header />
  
  <Home />
  <Demo />
  <Container>
  <Props states={states} />
  </Container>
  </div>
);
}

export default App

Props.jsx

import React from 'react'

const Props = ({states}) => {
  return (
    <>
    {states.map((state)=>
      <div key={state.name}>
        <h1>name: {state.name}</h1>
        <h4>semester: {state.semester}</h4>
        <h3>branch: {state.branch}</h3>
      </div>
    )}
    </>
  )
}
  
export default Props
