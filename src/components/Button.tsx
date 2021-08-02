import React from 'react'

function Button(prop: {name: string, style: string}) {
    return (
        <button className = {prop.style}>
            {prop.name}
        </button>
    )
}

export default Button
