import React, { useState, createContext } from 'react';
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';

export let TodoContext = createContext();

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

  let deleteTodo = (id) =>
  {
    setTodos(() => todos.filter((todo) => todo.id !== id));
  }

  let providerValue = {
    deleteTodo
  }

  return (
    <main>
      <div className="container">
        <h1>Todo List App</h1>
        <TodoContext.Provider value={providerValue}>
          <TodoForm addTodo={addTodo}/>
          <TodoItems todos={todos}/>
        </TodoContext.Provider>
      </div>
    </main>
  )
}

export default App;
