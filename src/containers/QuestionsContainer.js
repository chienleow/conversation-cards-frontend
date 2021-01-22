import React from 'react'
import {connect} from 'react-redux'

import Questions from '../components/Questions'
import QuestionInput from '../components/QuestionInput'

class QuestionsContainer extends React.Component {

    render() {
        return (
            <div>
                <QuestionInput/>
                <Questions/>
            </div>
        )
    }
}

export default connect()(QuestionsContainer)