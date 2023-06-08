import React, { useEffect, useState } from "react"

import Die from "./Die"

export default function App() {
    const [dice, setDices] = useState(
        Array.from({length: 10})
            .map(die => random(1, 10))
    )

    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const diceElements = dice.map(die => {
        return <Die die={die}/>
    })

    console.log(diceElements)
    
    return (
        <>
            <header>
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it as its current value between rolls.</p>
            </header>
            <main>
                <div className="dice-container">
                {diceElements}
                </div>
            </main>
            <footer>
                <button className="roll-bttn">Roll</button>
            </footer>
        </>
    )
}
