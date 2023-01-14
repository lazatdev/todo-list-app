import React, { useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
  let [todos, setTodos] = useState([]);
  // Helper Functions
  let addTodo = (todoName) =>
  {
    let todo = {
      id: Math.trunc(Math.random()*10000),
      todoName: todoName,
      completed: false
    }
    setTodos([...todos, todo]);
  }

  return (
    <main>
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm addTodo={addTodo}/>
      </div>
    </main>
  )
}

export default App;
