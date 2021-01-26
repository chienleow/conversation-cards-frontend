const initialState = []

export function questionReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'FETCH_QUESTIONS':
            return [action.payload.data]
            // data is a property of payload
            // this is your new Redux state
        case 'NEW_QUESTION':
            return [action.payload.data]
        default:
            return state
    }
}