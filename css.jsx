Inline CSS:-

import React from 'react'

const Header = () => {
  return (
    <div>
        <h1 style={{color:"red"}}>Component 1</h1>  // inline css
    </div>
  )
}

export default Header

CSS implemenation through variables

import React from 'react'

const Header = () => {
    var headingStyle={color:"blue"} // js object
  return (
    <div>
        <h1 style={headingStyle}>Component 1</h1>  // inline css
    </div>
  )
}
export default Header

External CSS

import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='headerDiv'>
        <h1 className='header'>Component 1</h1>  // external css
        <p className='para'>This is header component</p>
    </div>
  )
}

export default Header

.header{
    color:red;
    text-align:center;
}
.para{
    color:greenyellow;
    text-align:center;
    font-size:20px;
}
.headerDiv{
    border:2px solid black;
    margin:10px;
    padding:10px;
    background-color:violet
}

For large CSS modules collisions can occur then we can use header.module.css


















