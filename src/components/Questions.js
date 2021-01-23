import React from 'react'

// functional component (they are just functions, they don't need render)
const Questions = (props) => {

    console.log("props.questions:", props.questions)
    // debugger
    return (
        <div>
         {!!props.questions.questions ? props.questions.questions.map(question => <li key={question.id}>{question.attributes.sentence} - {question.attributes.category}</li> ):null}
        </div>
    )
}

export default Questions