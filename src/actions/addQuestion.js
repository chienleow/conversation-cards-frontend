export const addQuestion = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3040/api/v1/questions', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(question => {
            dispatch({type: 'NEW_QUESTION', payload: question})
        })

    }
}