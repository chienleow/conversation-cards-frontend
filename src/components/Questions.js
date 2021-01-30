import React from "react";
import Question from './Question'

const Questions = (props) => {

        if (!!props.questions) {
          return (
            props.questions.map(question => <Question key={question.id} question={question}/>)
          )
          } else {
            return (
              <div>loading</div>
            )
        };

};

export default Questions;