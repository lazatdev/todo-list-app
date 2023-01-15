import React, { useState } from "react";
import SingleTodo from './SingleTodo';
import Button from './Button';

let TodoItems = ({todos, getNumberOfTodos}) =>
{
    let [isAll, setIsAll] = useState(false);

    return (
        <>
            <h3>Todo List</h3>
            <div className="numberOfTodos">
                {`${getNumberOfTodos()} Todos`}
            </div>
            <div className="display-todos">
                <Button content={'All'} setIsAll={setIsAll}/>
            </div>
            <ul className="todo-items">
                {
                    isAll ? todos.map((todo, index) => {
                        return <SingleTodo key={index} todo={todo}/>
                    }) : ''
                }
            </ul>
        </>
    )
}

export default TodoItems;