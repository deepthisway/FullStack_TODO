import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3000/all-todos")
    .then(async function(res) {
      const data = await res.json();
      setTodos(data);
    })

  return (
    <div>
     <h1>TODO app</h1>
     <CreateTodo/>
     <Todos todos={todos} ></Todos>
    </div>
  )
}

export default App
