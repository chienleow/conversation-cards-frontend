import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

      return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text>
                {!!props.questions ? props.questions.map(question => <li key={question.id}>{question.attributes.sentence} - {question.attributes.user.name} - {question.attributes.category}</li> ):'loading'}
              </Card.Text>
              <Button onClick={handleClick}>Open Question</Button>
            </Card.Body>
          </Card>
    
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button onClick={handleClick}>Back</Button>
            </Card.Body>
          </Card>
        </ReactCardFlip>
      )

}

  export default CardFlip;