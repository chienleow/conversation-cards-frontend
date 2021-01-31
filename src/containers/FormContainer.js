import React from 'react';
import {connect} from 'react-redux';
import {addQuestion} from '../actions/addQuestion';
import QuestionInput from '../components/QuestionInput';
import UserQuestions from '../components/UserQuestions';

class FormContainer extends React.Component {

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
        questions: state.question
    }
}

export default connect(mapStateToProps, {addQuestion})(FormContainer)