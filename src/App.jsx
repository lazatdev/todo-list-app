import React, { useState, createContext } from 'react';
import Button from './components/Button';
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';
import './app.scss';

export let TodoContext = createContext();

function App() {
  let [todos, setTodos] = useState([]);
  let [editTodo, setEditTodo] = useState(null);

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

  let updateTodo = (todo) =>
  {
    setTodos(() => todos.map((singleTodo) => {
      if(singleTodo.id === todo.id)
      {
        return {...singleTodo, todoName: todo.todoName}
      }
      return todo;
    }));
    setEditTodo(null);
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

  let deleteAllDoneTodos = () =>
  {
    setTodos(() => todos.filter((todo) => todo.completed !== true));
  }

  let providerValue = {
    deleteTodo,
    completeTodo,
    setEditTodo
  }

  return (
    <main>
      <div className="container">
        <h1>Todo List App</h1>
        <TodoContext.Provider value={providerValue}>
          <TodoForm 
            addTodo={addTodo} 
            editTodo={editTodo} 
            setEditTodo={setEditTodo} 
            updateTodo={updateTodo}
          />
          <TodoItems todos={todos} getNumberOfTodos={getNumberOfTodos}/>
        </TodoContext.Provider>
        <div className='delete-todos'>
          <Button content={'Delete all todos'} deleteAllTodos={deleteAllTodos}/>
          <Button content={'Delete all done todos'} deleteAllDoneTodos={deleteAllDoneTodos}/>
        </div>
        {console.log(todos)}
      </div>
    </main>
  )
}

export default App;
