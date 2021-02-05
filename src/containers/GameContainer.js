import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/fetchQuestions';
import Questions from '../components/Questions';

class GameContainer extends React.Component {

    componentDidMount() {
        this.props.fetchQuestions()
        console.log("a")
    }

    render() {
        //when props or state change, it re-renders
        console.log("b")
        console.log("b", this.props.questions)
        return (
            <Questions questions={this.props.questions}/>
        )
    }
}

const mapStateToProps = state => {
    // mapping the state from Redux store to props, giving us access to this component(GameContainer).
    // console.log("mapStateTopProps", state.question[0])
    console.log("c")
    return {
        questions: state.question[0]
    }
}

export default connect(mapStateToProps, {fetchQuestions})(GameContainer)