import React, {useContext} from 'react';
import {TodoContext} from '../App';

let SingleTodo = ({todo}) =>
{
    let {deleteTodo, completeTodo, setEditTodo} = useContext(TodoContext);
    return (
        <li className='todo-item'>
            <div className='checkbox-completed-todo'>
                <input 
                    type='checkbox' 
                    checked={todo.completed} 
                    onChange={() => completeTodo(todo.id)}
                />
            </div>
            {todo.todoName}
            <div className='todo-management'>
                <span className='delete' onClick={() => deleteTodo(todo.id)}>{'[delete]'}</span>
                <span className='edit' onClick={() => setEditTodo(todo)}>{'[edit]'}</span>
            </div>
        </li>
    )
}

export default SingleTodo;