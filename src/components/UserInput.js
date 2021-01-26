import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {addUser} from '../actions/addUser';
import {Redirect} from 'react-router-dom';

class UserInput extends React.Component {

    state = {name: '', redirect: false}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state.name)
        this.setState({
            name: '',
            redirect: true
        })
    }

    render() {
        if (this.state.redirect === false)
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
        else
            return <Redirect to="/form"/>
    }
}

export default connect(null, {addUser})(UserInput)