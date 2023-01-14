import React, {useState} from 'react';
import Button from './Button';

let TodoForm = ({addTodo}) =>
{
    let [input, setInput] = useState('');

    // Helper Functions
    let handleChange = (event)=>
    {
        setInput(event.target.value);
    }

    let handleSubmit = (event) =>
    {
        event.preventDefault();
        addTodo(input);
        setInput('');
    }

    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Please write your todo!'
                value={input}
                onChange={handleChange}
            />
            <Button content={'Add'}/>
        </form>
    );
}

export default TodoForm;