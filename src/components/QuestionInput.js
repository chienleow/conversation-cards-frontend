import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class QuestionInput extends React.Component {

    // need state to create a form, onchange, handlesubmit

    render() {
        return (
            <div>
                <h1>Welcome, xxx</h1>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Questions</Form.Label>
                        <Form.Control type="text" placeholder="Question 1" /><br/>
                        <Form.Control type="text" placeholder="Question 2" /><br/>
                        <Form.Control type="text" placeholder="Question 3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default QuestionInput