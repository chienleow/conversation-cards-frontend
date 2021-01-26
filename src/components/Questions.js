import React from 'react';

// functional component (they are just functions, they don't need render)
const Questions = (props) => {

    console.log("Hello", props)
    return (
        <div>
         {!!props.questions.questions ? props.questions.questions.map(question => <li key={question.id}>{question.attributes.sentence} - {question.attributes.user.name}</li> ):null}
        </div>
    )
}

export default Questions