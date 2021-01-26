import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {connect} from 'react-redux';
import {addQuestion} from '../actions/addQuestion';

class QuestionInput extends React.Component {

    state = {sentence: '', category: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addQuestion({
            sentence: this.state.sentence, 
            category: this.state.category, 
            user_id: this.props.state.user[0].id
        })
        this.setState({
            sentence: '',
            category: ''
        })
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome {this.props.state.user.length !== 0 ? this.props.state.user[0].name : "..."}</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Question</Form.Label>
                            <Form.Control type="text" placeholder="Enter a question" value={this.state.sentence} name="sentence" onChange={this.handleChange}/><br/>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter a category" value={this.state.category} name="category" onChange={this.handleChange}/><br/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Jumbotron>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       state
    }
}

export default connect(mapStateToProps, {addQuestion})(QuestionInput)