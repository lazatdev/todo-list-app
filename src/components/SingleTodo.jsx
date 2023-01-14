import React from 'react';

let SingleTodo = ({todo}) =>
{
    return (
        <li className='todo-item'>
            {
                todo.todoName
            }
        </li>
    )
}

export default SingleTodo;