import React from "react";
import Question from './Question';
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";

// Sort button steps:
// - convert to class, and add state
// - I want to sort the category first before mapping it
// - if sorted is true, show the sorted array

class Questions extends React.Component {
    constructor(props) {
        // console.log("z", props)
        super(props)
        this.state = {
            sortedCat: []
        }
    }

    handleClick = () => {
        this.setState({
            sortedCat: this.props.questions.sort((a, b) => (a.attributes.category < b.attributes.category) ? -1 : 1)
        })

    }

    render() {

        if (this.state.sortedCat.length !== 0) {
            return (
                <>
                <button onClick={this.handleClick}>Sort by Categories</button>
                {this.state.sortedCat.map(question =>
                  <CardDeck>
                      <Question key={question.id} question={question}/>
                  </CardDeck>
                )}
                </>
            )

        } else if (this.state.sortedCat.length === 0 && !!this.props.questions) {
            return (
                this.props.questions.map(question =>
                  <CardDeck>
                      <Question key={question.id} question={question}/>
                  </CardDeck>
                )
            )
        } else {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        };
    }

    // handleClick = () => {
    //     const sortedCat = props.questions
    //     sortedCat.sort((a, b)) => (a.questions)

};

export default Questions