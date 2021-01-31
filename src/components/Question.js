import React from "react";
import ReactCardFlip from 'react-card-flip';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Question extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isFlipped: false
        }
    }
  
    handleClick = () => {
      this.setState({
          isFlipped: !this.state.isFlipped
        })
    };

    render() {
        
        const props = this.props
        
        return(
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <Card>
                    <Card.Body question-id={props.question.id}>
                    <Card.Text>
                        {props.question.attributes.category}
                    </Card.Text>
                    <Button onClick={this.handleClick}>Open Question</Button>
                    </Card.Body>
                </Card>
        
                <Card>
                    <Card.Body>
                    <Card.Text>
                        {props.question.attributes.sentence} - {props.question.attributes.user.name}
                    </Card.Text>
                    <Button onClick={this.handleClick}>Back</Button>
                    </Card.Body>
                </Card>
            </ReactCardFlip>
        )
    }
}

export default Question