import React from "react"

export default function Die(props) {
    const {die} = props
    return (
        <div className="die">
            {die}
        </div>
    )
}