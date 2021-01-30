import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Question = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };

    return(
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card style={{ width: '18rem' }}>
            <Card.Body questionId={props.question.id}>
            <Card.Text>
                {props.question.attributes.category}
            </Card.Text>
            <Button onClick={handleClick}>Open Question</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Text>
                {props.question.attributes.sentence} - {props.question.attributes.user.name}
            </Card.Text>
            <Button onClick={handleClick}>Back</Button>
            </Card.Body>
        </Card>
        </ReactCardFlip>
    )
}

export default Question