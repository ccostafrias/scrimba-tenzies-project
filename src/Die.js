import React from "react"

export default function Die(props) {
    const {die, index, locked, lockDie} = props

    const dieMatrix = {
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80]
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],
        6: [
            [20, 20],
            [20, 50],
            [20, 80],
            [80, 20],
            [80, 50],
            [80, 80]
        ]
    }
    
    function setDiePosition(left, top) {
        return {
            left: `${left}%`,
            top: `${top}%`,
            transform: `translate(calc(${left}% * -1), calc(${top}% * -1))`
        }
    }

    return (
        <div 
            className={`die${locked ? ' active' : ''}`}
            onClick={() => lockDie(index)}
            data-value={die}
        >
            {dieMatrix[die].map(die => {
                const [left, top] = die
                return <div className="die-dot" style={setDiePosition(left, top)}></div>
            })}
        </div>
    )
}