import React from 'react';

let Button = ({backgroundColor, fontColor, content}) =>
{
    let btnStyle = {
        backgroundColor: backgroundColor,
        color: fontColor
    }
    return (
        <button style={btnStyle}>{content}</button>
    )
}

export default Button;