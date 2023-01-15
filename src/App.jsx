import React, { useState, createContext } from 'react';
import Button from './components/Button';
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

  let completeTodo = (id) =>
  {
    setTodos(() => todos.map((todo) => {
      if(todo.id === id)
      {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    }))
  }

  let getNumberOfTodos = () => todos.length;

  let deleteAllTodos = () =>
  {
    setTodos([]);
  }

  let providerValue = {
    deleteTodo,
    completeTodo
  }

  return (
    <main>
      <div className="container">
        <h1>Todo List App</h1>
        <TodoContext.Provider value={providerValue}>
          <TodoForm addTodo={addTodo}/>
          <TodoItems todos={todos} getNumberOfTodos={getNumberOfTodos}/>
        </TodoContext.Provider>
        <div className='delete-todos'>
          <Button content={'Delete all todos'} deleteAllTodos={deleteAllTodos}/>
        </div>
        {console.log(todos)}
      </div>
    </main>
  )
}

export default App;
