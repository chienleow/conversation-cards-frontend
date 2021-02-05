import React from "react";
import Question from './Question';
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

class Questions extends React.Component {
    constructor(props) {
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

        let button = <Button variant="secondary" onClick={this.handleClick}>Sort by Categories</Button>

        if (this.state.sortedCat.length !== 0) {
            return (
                <>
                {button}
                {this.state.sortedCat.map(question =>
                  <CardDeck>
                      <Question key={question.id} question={question}/>
                  </CardDeck>
                )}
                </>
            )

        } else if (this.state.sortedCat.length === 0 && !!this.props.questions) {
            return (
                <>
                {button}
                {this.props.questions.map(question =>
                  <CardDeck>
                      <Question key={question.id} question={question}/>
                  </CardDeck>
                )}
                </>
            )
            
        } else {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>

            )
        }
    }
}

export default Questions