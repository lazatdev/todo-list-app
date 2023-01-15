import React from 'react';

let Button = ({backgroundColor, fontColor, content, setIsAll}) =>
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