export const addUser = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3040/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })

    }
}