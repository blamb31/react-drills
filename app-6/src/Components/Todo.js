import React from 'react'

export default function Todo(props) {

    console.log(props)
    return(
        <div>

            <h3>{props.toDoItem}</h3>

        </div>
    )
} 