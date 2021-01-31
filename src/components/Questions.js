import React from "react";
import Question from './Question';
import CardDeck from "react-bootstrap/CardDeck";
// import Container from "react-bootstrap/Container";

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
            <div>loading</div>
        )
    };
};

export default Questions;