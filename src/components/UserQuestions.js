import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

// functional component (they are just functions, they don't need render)
const UserQuestions = (props) => {

    return (
        <ListGroup>
            {!!props.userQuestions.questions ? props.userQuestions.questions.map(question => <ListGroup.Item key={question.id}> <p style={{fontWeight: "bold"}}>Question:</p><p>{question.sentence}</p> <p style={{fontWeight: "bold"}}>Category:</p><p>{question.category}</p></ListGroup.Item>):null}
        </ListGroup>
    )
}

export default UserQuestions