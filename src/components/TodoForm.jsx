import React, {useState, useEffect, useRef} from 'react';
import Button from './Button';

let TodoForm = ({addTodo, editTodo, setEditTodo, updateTodo}) =>
{
    let [input, setInput] = useState('');
    let [errorMsg, setErrorMsg] = useState('');
    let inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[input, editTodo])

    // Helper Functions
    let handleChange = (event)=>
    {
        if(!editTodo)
        {
                setInput(event.target.value.trimStart());
        }
        else 
        {
            setEditTodo({...editTodo, todoName: event.target.value});
        }
    }

    let handleSubmit = (event) =>
    {
        event.preventDefault();
        if(!editTodo)
        {
            if(input)
            {
                setErrorMsg('');
                addTodo(input);
                setInput('');
            }
            else 
            {
                setErrorMsg('Please write your todo!');
            }
            return;
        }
        updateTodo(editTodo);
    }

    return (
        <div className='container-todoForm'>
            <form className='todoForm' onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    ref={inputRef}
                    placeholder='Your todo...'
                    value={!editTodo ? input : editTodo.todoName}
                    onChange={handleChange}
                />
                <Button content={!editTodo ? 'Add' : 'Edit'}/>
            </form>
            {errorMsg ? <div className='errorMsg'>{errorMsg}</div> : ''}
        </div>
    );
}

export default TodoForm;