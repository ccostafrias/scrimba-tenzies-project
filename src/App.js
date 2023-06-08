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
                    value: randomDie(),
                    locked: false
                }
            })
        )
    }

    function randomDie(last) {
        const newNum = Math.floor(Math.random() * 6 + 1)
        return newNum === last ? randomDie(last) : newNum
    }

    function lockDie(index) {
        setDice(prevDice => {
            return prevDice.map(die => {
                return index === die.index ? {...die, locked: !die.locked} : die
            })
        })
    }

    function rerollDice() {
        setDice(prevDice => {
            return prevDice.map(die => {
                return !die.locked ? {...die, value: randomDie(die.value)} : die
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
            <main>
                <header>
                    <h1>Tenzies</h1>
                    <p>Roll until all dice are the same. Click each die to freeze it as its current value between rolls.</p>
                </header>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button
                    className="roll-bttn"
                    onClick={allDone ? resetGame : rerollDice}
                >
                    {allDone ? "Reset Game" : "Roll"}
                </button>
            </main>
        </>
    )
}
