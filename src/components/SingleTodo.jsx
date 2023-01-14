import React, {useContext} from 'react';
import {TodoContext} from '../App';

let SingleTodo = ({todo}) =>
{
    let {deleteTodo} = useContext(TodoContext);
    return (
        <li className='todo-item'>
            {todo.todoName}
            <div className='todo-management'>
                <span 
                    className='delete'
                    onClick={() => deleteTodo(todo.id)}
                >{'[delete]'}</span>
            </div>
        </li>
    )
}

export default SingleTodo;