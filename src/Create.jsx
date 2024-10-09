import React from 'react'
import { useState } from 'react';
import axios from 'axios'

const Create = () => {
  const [task, settask] = useState();
  const handleAdd = () =>{
    axios.post('https://todolist-backend-drys.onrender.com/add', {task: task})
    .then(result=>{
      location.reload();
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='create_form'>
      <input type="text" placeholder='Enter Task' onChange={(e)=>settask(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
