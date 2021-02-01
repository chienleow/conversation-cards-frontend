import React from "react";
import Question from './Question';
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";

const Questions = (props) => {

    if (!!props.questions) {
        return (
            props.questions.map(question =>
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
};

export default Questions;