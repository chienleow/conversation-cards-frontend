export const addUser = (name) => {

    return (dispatch) => {
        fetch('http://localhost:3040/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({name: name})
        })
        .then(response => response.json())
        .then(name => {
            dispatch({type: 'NEW_USER', payload: name})
            // dispatch adds new user to Redux Store
        })
    }
}