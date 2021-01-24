const initialState = []

export default function questionReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'FETCH_QUESTIONS':
            return [action.payload.data]
            // data is a property of payload
            // this is your new Redux state
        default:
            return state
    }
}