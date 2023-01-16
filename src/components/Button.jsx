import React from 'react';

let Button = ({
    content, 
    setIsAll,
    deleteAllTodos,
    deleteAllDoneTodos
    }) =>
{

    let createBtn = () =>
    {
        switch(content)
        {
            case 'All': return (<button onClick={() => setIsAll(true)}>{content}</button>);
            case 'Done': return (<button onClick={() => setIsAll(false)}>{content}</button>);
            case 'Delete all todos': return (<button onClick={deleteAllTodos}>{content}</button>);
            case 'Delete all done todos': return (<button onClick={deleteAllDoneTodos}>{content}</button>);
            default: return (<button>{content}</button>);
        }
    }
    return (
        <>
            {createBtn()}
        </>
    )
}

export default Button;