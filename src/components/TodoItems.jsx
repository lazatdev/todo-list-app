import React, { useState } from "react";
import SingleTodo from './SingleTodo';
import Button from './Button';

let TodoItems = ({todos, getNumberOfTodos}) =>
{
    let [isAll, setIsAll] = useState(false);
    let allDoneTodos = todos.filter((todo) => todo.completed === true);

    return (
        <div className="todo-list-container">
            <div className="top">
                <h3>Todo List</h3>
                <div className="numberOfTodos">
                    {`${getNumberOfTodos()} Todos`}
                </div>
            </div>
            <div className="display-todos">
                <Button content={'All'} setIsAll={setIsAll}/>
                <Button content={'Done'} setIsAll={setIsAll}/>
            </div>
            <ul className="todo-items">
                {
                    isAll ? todos.map((todo, index) => {
                        return <SingleTodo key={index} todo={todo}/>
                    }) : allDoneTodos.map((todo, index) => {
                        return <SingleTodo key={index} todo={todo}/>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoItems;