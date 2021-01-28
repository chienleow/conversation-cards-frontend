const initialState = []

export function questionReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'FETCH_QUESTIONS':
            return [action.payload.data]
            // data is a property of payload
            // this is your new Redux state
        case 'ADD_QUESTION':
            return [...state, action.payload]
            // everything in the state plus the new question
        default:
            return state
    }
}