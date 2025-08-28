// jsx Fragments in react

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (

 < >
<h1>Table</h1>
<table>
  <tr>
    <th>Firstname</th>
    <th>address</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Kerala</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Delhi</td>
  </tr>
</table>
</>
        
  );
}

export default App
