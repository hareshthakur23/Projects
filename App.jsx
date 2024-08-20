import React from 'react'
import AppName from './Components/AppName'
import Addtodo from './Components/Addtodo'
import TodoItem1 from './Components/TodoItem1'
import TodoItem2 from './Components/TodoItem2'
import './App.css'

const App = () => {
  return (
  <center className='todo-container'>
    <AppName/>
    <Addtodo/>
    <TodoItem1/>
    <TodoItem2/>
  </center>
  )
}

export default App
