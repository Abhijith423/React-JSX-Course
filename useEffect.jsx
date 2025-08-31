//hook function which used to perform side effects like fetching api data,dom update etc outside function
* effects.jsx

import React, { useState , useEffect} from 'react'

const effects = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
         {console.log("Side effects")}
    })
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    
    </>
  )
}

export default effects

* App.jsx

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import samsungImg from './assets/samsung.jpg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Components/Products/product'
import Effects from './Components/Effects/Effects';

function App() {
  return (
    <div className="App">
      <img src={ samsungImg } alt="Apple" style={{ width: '100px' }} />
      <br />
      <br />
      <Product />
      <Effects />
    </div>
  );
}

export default App

// if we want to remove the side effect render we use this array [] use after useStates in effect.jsx
  
* effect.jsx

import React, { useState , useEffect} from 'react'

const effects = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
         {console.log("Side effects")}
    }, [])
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    
    </>
  )
}

export default effects










