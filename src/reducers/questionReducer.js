const initialState = { questions: [] }

export default function questionReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'FETCH_QUESTIONS':
            return {}
        default:
            return state
    }
}