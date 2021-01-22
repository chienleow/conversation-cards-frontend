import React from 'react'
import {connect} from 'react-redux'

import {fetchQuestions} from '../actions/fetchQuestions'
import Questions from '../components/Questions'
import QuestionInput from '../components/QuestionInput'

class QuestionsContainer extends React.Component {

    componentDidMount() {
        fetchQuestions()
    }

    render() {
        return (
            <div>
                <QuestionInput/>
                <Questions/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, {fetchQuestions})(QuestionsContainer)