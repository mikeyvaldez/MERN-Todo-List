/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs'
import Create from './Create'
import axios from 'axios'


function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create />
        <br />
        {
            todos.length === 0
            ?
            <div><h2>No Record</h2></div>
            :            
            todos.map(todo => (
            <div className='task'>
                <div className='checkbox'>
                    <BsCircleFill className='icon'/>
                    <p>{todo.task}</p>
                </div>
                <div>
                    <span><BsFillTrashFill className='icon'/></span>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default Home