export function fetchQuestions() {
    return (dispatch) => {
        fetch('http://localhost:3040/api/v1/questions')
        .then(response => response.json())
        .then(questions => {
            dispatch({
                type: 'FETCH_QUESTIONS',
                payload: questions
            })
        })
    }
}