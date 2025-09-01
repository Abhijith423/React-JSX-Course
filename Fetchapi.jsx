// Fetch an api from without using a database

// Api.jsx

import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Api = () => {
    const [posts, setPosts] = React.useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
    }, [])

  return <div className="Api">
     <h5>Fetch Api</h5>
    </div>
}

export default Api

//if we want to display the demo api post contents then use this framework

* api.jsx

import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Api = () => {
    const [posts, setPosts] = React.useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
    }, [])

  return <div className="Api">
     <h5 className="bg-danger text-white">Fetch Api</h5>
        {posts.map(post => (
     <h1>{post.title}</h1>))}
    </div>
}

export default Api

// if we want to display only the basic 10 codes only needed to display then

import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Api = () => {
    const [posts, setPosts] = React.useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json.splice(0,10)))
    }, [])

  return <div className="Api">
     <h5 className="bg-danger text-white">Fetch Api</h5>
        {posts.map(post => (
     <div key={post.id} className='bg-dark' style={{border: '1px solid black', margin: '10px', padding: '10px'}}> 
        <h1 className='text-info'>{post.title}</h1>
     <p className="text-white">{post.body}</p>
     </div>))}
    </div>
    
}

export default Api


