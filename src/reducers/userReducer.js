const initialState = []

export function userReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'ADD_USER':
            return [action.payload]
            // data is a property of payload
            // this is your new Redux state
        default:
            return state
    }
}