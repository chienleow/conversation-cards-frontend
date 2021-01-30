import React from 'react';

// functional component (they are just functions, they don't need render)
const Questions = (props) => {

    return (
        <div>
         {!!props.questions ? props.questions.map(question => <li key={question.id}>{question.attributes.sentence} - {question.attributes.user.name}</li> ):'loading'}
        </div>
    )
}

export default Questions