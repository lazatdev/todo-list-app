import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';

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
        <TodoItems todos={todos}/>
      </div>
    </main>
  )
}

export default App;
