props are components in react which is used to give the elements passed in parent node to the child node.

  // app.jsx
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
return (
<>
 <div className="App">
  <Header />
  </div>
  <Home />
  <Demo />
  <Container>
  <Props name="Abhishek" semester="3rd" branch="CSE"/>
  <Props name="Vishnu" semester="3rd" branch="CE"/>
  <Props name="Akhil" semester="3rd" branch="ME"/>



  </Container>
  

</> 
);
}

export default App

// props.jsx

import React from 'react'

const Props = (props) => {
  return (
    <>
    <h1>name: {props.name}</h1>
    <h4>semester: {props.semester}</h4>
    <h3>branch: {props.branch}</h3>
    </>
    
  )
}
  export default Props

//Another way to set prop.js

import React from 'react'

const Props = ({name,semester,branch}) => {
  return (
    <>
    <h1>name: {name}</h1>
    <h4>semester: {semester}</h4>
    <h3>branch: {branch}</h3>
    </>
    
  )
}

export default Props






