import React from 'react';

let Button = ({
    backgroundColor, 
    fontColor, 
    content, 
    setIsAll,
    deleteAllTodos,
    deleteAllDoneTodos
    }) =>
{
    let btnStyle = {
        backgroundColor: backgroundColor,
        color: fontColor
    }

    let createBtn = () =>
    {
        switch(content)
        {
            case 'All': return (<button style={btnStyle} onClick={() => setIsAll(true)}>{content}</button>);
            case 'Done': return (<button style={btnStyle} onClick={() => setIsAll(false)}>{content}</button>);
            case 'Delete all todos': return (<button style={btnStyle} onClick={deleteAllTodos}>{content}</button>);
            case 'Delete all done todos': return (<button style={btnStyle} onClick={deleteAllDoneTodos}>{content}</button>);
            default: return (<button style={btnStyle}>{content}</button>);
        }
    }
    return (
        <>
            {createBtn()}
        </>
    )
}

export default Button;