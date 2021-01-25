import React from 'react';
import {connect} from 'react-redux';

import {fetchQuestions} from '../actions/fetchQuestions';
import Questions from '../components/Questions';

class GameContainer extends React.Component {

    componentDidMount() {
        this.props.fetchQuestions()
    }

    render() {
        // console.log("this.props:", this.props)
        //when props or state change, it rerender
        return (
            <div>
                <Questions questions={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("mapStateTopProps", state[0])
    return {
        questions: state[0]
    }
}

export default connect(mapStateToProps, {fetchQuestions})(GameContainer)