import React from 'react'

// functional component (they are just functions, they don't need render)
const Questions = (props) => {
    console.log("HELLO!!!", props)
    return (
        <div>
            {props.questions.map(question => <li key={question.id}>{question.sentence} - {question.category}</li> )}
        </div>
    )
}

export default Questions