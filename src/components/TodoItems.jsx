import React from "react";
import SingleTodo from './SingleTodo';

let TodoItems = ({todos, getNumberOfTodos}) =>
{
    return (
        <>
            <h3>Todo List</h3>
            <div className="numberOfTodos">
                {`${getNumberOfTodos()} Todos`}
            </div>
            <ul className="todo-items">
                {
                    todos.map((todo, index) => {
                        return <SingleTodo key={index} todo={todo}/>
                    })
                }
            </ul>
        </>

    )
}

export default TodoItems;