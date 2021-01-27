import React from 'react';

// functional component (they are just functions, they don't need render)
const UserQuestions = (props) => {

    // debugger

    return (
        <div>
            hello!
         {!!props.userQuestions.questions ? (props.userQuestions.questions.sentence + "-" + props.userQuestions.questions.category) : null}
        </div>
    )
}

export default UserQuestions