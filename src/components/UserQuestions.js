import React from 'react';

// functional component (they are just functions, they don't need render)
const UserQuestions = (props) => {

    return (
        <div>
         {!!props.userQuestions.questions ? props.userQuestions.questions.map(question => <li key={question.id}>{question.sentence} - {question.category}</li>):null}
        </div>
    )
}

export default UserQuestions