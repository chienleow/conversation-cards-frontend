export const addQuestion = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3040/api/v1/questions', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({question: data})
        })
        .then(response => response.json())
        .then(question => {
            dispatch({type: 'ADD_QUESTION', payload: question})
            // dispatching an action object
        })

    }
}