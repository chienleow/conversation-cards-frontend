import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Questions = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

        if (!!props.questions) {
          return (
            props.questions.map(question => 
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <Card style={{ width: '18rem' }}>
                <Card.Body key={question.id}>
                  <Card.Text>
                    {question.attributes.category}
                  </Card.Text>
                  <Button onClick={handleClick}>Open Question</Button>
                </Card.Body>
              </Card>
        
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>
                    {question.attributes.sentence} - {question.attributes.user.name}
                  </Card.Text>
                  <Button onClick={handleClick}>Back</Button>
                </Card.Body>
              </Card>
            </ReactCardFlip>
            )
          )
          } else {
            return (
              <div>loading</div>
            )
        };

};

export default Questions;