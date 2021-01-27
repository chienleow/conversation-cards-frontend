const initialState = []

export function questionReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'FETCH_QUESTIONS':
            return [action.payload.data]
            // data is a property of payload
            // this is your new Redux state
        case 'ADD_QUESTION':
            return {...state, questions: [...state.questions, action.payload]}
        default:
            return state
    }
}