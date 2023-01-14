import React, {useState} from 'react';
import Button from './Button';

let TodoForm = () =>
{
    let [input, setInput] = useState('');

    // Helper Functions
    let handleChange = (event)=>
    {
        setInput(event.target.value);
    }

    return (
        <form className='todoForm'>
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