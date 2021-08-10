import React from 'react'

function Button({name, style}) {
    return (
        <button className = {style}>
            {name}
        </button>
    )
}

export default Button
