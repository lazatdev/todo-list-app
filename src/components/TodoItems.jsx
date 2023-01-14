import React from "react";
import SingleTodo from './SingleTodo';

let TodoItems = ({todos}) =>
{
    return (
        <ul className="todo-items">
            {
                todos.map((todo, index) => {
                    return <SingleTodo key={index} todo={todo}/>
                })
            }
        </ul>
    )
}

export default TodoItems;