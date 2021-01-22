const initialState = { questions: [] }

export default function questionReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'FETCH_QUESTIONS':
            return {questions: action.payload}
            // this is your new Redux state
        default:
            return state
    }
}