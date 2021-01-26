import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {addUser} from '../actions/addUser';

class UserInput extends React.Component {

    state = {name: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state.name, this.props.history)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter username" value={this.state.name} name="name" onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        addUser: (name, history) => dispatch(addUser(name, history))
    }
}

export default connect(null, mapDispatchToProps)(UserInput)