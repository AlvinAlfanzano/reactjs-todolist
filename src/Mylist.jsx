import React from 'react'
import "./App.css"
import "./App.jsx"

function Mylist(props) {

  return (
    <div>
        <div className='box2'>
            <h3>{props.id +1}{". "}{props.data}</h3> 
            <button onClick={()=>{props.onSelect(props.id)}}>delete</button>
            <button onClick={()=>{props.onEdit(props.id)}}>edit</button>
        </div>
            <br />
    </div>
  )
}


export default Mylist