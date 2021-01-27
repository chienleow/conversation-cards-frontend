import React from 'react';
import {connect} from 'react-redux';
import {addQuestion} from '../actions/addQuestion';
import QuestionInput from '../components/QuestionInput';
import UserQuestions from '../components/UserQuestions';

class FormContainer extends React.Component {

    componentDidMount() {
        this.props.addQuestion()
    }

    render() {
        return (
            <div>
                <QuestionInput/>
                <UserQuestions userQuestions={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.question[0]
    }
}


export default connect(mapStateToProps, {addQuestion})(FormContainer)