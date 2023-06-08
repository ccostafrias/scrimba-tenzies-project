import React, { useEffect, useState } from "react"

import Die from "./Die"

export default function App() {
    const [dice, setDice] = useState(
        resetDice()
    )

    function resetDice(length = 10) {
        return (
            Array.from({length})
            .map((die, i) => {
                return {
                    index: i,
                    value: random(1, 10),
                    locked: false
                }
            })
        )
    }

    function random(min, max, last) {
        const newNum = Math.floor(Math.random() * (max - min) + min)
        return newNum === last ? random(max, min, last) : newNum
    }

    function lockDie(index) {
        console.log(index)
        setDice(prevDice => {
            return prevDice.map(die => {
                return index === die.index ? {...die, locked: !die.locked} : die
            })
        })
    }

    function rerollDice() {
        setDice(prevDice => {
            return prevDice.map(die => {
                return !die.locked ? {...die, value: random(1, 10, die.value)} : die
            })
        })
    }

    function resetGame() {
        setDice(resetDice())
    }

    const diceElements = dice.map(die => {
        return (
            <Die 
                key={die.index}
                die={die.value}
                index={die.index}
                locked={die.locked}
                lockDie={lockDie}
            />
        )
    })

    const allDone = 
        dice.every(die => die.value === dice[0].value) &&
        dice.every(die => die.locked)
    
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
                <button
                    className="roll-bttn"
                    onClick={allDone ? resetGame : rerollDice}
                >
                    {allDone ? "Reset Game" : "Roll"}
                </button>
            </footer>
        </>
    )
}
