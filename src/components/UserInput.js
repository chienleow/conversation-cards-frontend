import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UserInput extends React.Component {

    state = {name: ''}

    // need state to create a form, onchange, handlesubmit

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Username</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter username" value={this.state.name}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default UserInput