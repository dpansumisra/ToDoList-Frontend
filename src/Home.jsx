import { useState, useEffect } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsTrashFill } from 'react-icons/bs';

const Home = () => {
    const [todos, settodos] = useState([]);

    useEffect(() => {
        axios.get('https://todolist-backend-drys.onrender.com/get')
            .then(result => settodos(result.data))
            .catch(err => console.log(err));
    }, []);
    const handleEdit=(id)=>{
      axios.put('https://todolist-backend-drys.onrender.com/update/'+id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err));
    }
    const handleDelete = (id) =>{
      axios.delete('https://todolist-backend-drys.onrender.com/delete/'+id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err));
    }

    return (
        <div className='home'>
            <h2>ToDo List</h2>
            <Create />
            <br />
            {
                todos.length === 0 ?
                    <div><h2>No Record</h2></div>
                    :
                    todos.map((todo) => {
                        return (
                            <div className='task' key={todo.id}>
                                <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                                  {
                                    todo.done ? <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                                    : <BsCircleFill className='icon' />
                                  }
                                    <p>{todo.task}</p>
                                </div>
                                <div>
                                    <span><BsTrashFill className='icon'  
                                    onClick={()=>handleDelete(todo._id)}/></span>
                                </div>
                            </div>
                        ); 
                    })
            }
        </div>
    );
};

export default Home;
