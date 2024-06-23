import { useState } from 'react'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3000/all-todos")
    .then(async function(res) {
      const data = await res.json();
      setTodos(data);
    })
  
    const style1 ={
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10vh',
      backgroundColor: 'lightblue'
      
    }

  return (
    <div>
     <h1 style= {style1}>TODO app</h1>
     <CreateTodo/>
     <Todos todos={todos} ></Todos>
    </div>
  )
}

export default App
