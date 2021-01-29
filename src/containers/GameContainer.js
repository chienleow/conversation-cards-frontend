import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/fetchQuestions';
import CardFlip from '../components/CardFlip'

class GameContainer extends React.Component {

    componentDidMount() {
        this.props.fetchQuestions()
    }

    render() {
        //when props or state change, it re-renders
        return (
            <div>
                <CardFlip questions={this.props.questions}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateTopProps", state.question[0])
    return {
        questions: state.question[0]
    }
}

export default connect(mapStateToProps, {fetchQuestions})(GameContainer)