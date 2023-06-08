import React from "react"

export default function Die(props) {
    const {die, index, locked, lockDie} = props
    return (
        <div 
            className={`die ${locked ? 'active' : ''}`}
            onClick={() => lockDie(index)}
        >
            {die}
        </div>
    )
}