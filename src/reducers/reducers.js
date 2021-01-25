import {questionReducer} from './questionReducer';
import {userReducer} from './userReducer';

export const rootReducer = () => combineReducer({
    user: userReducer,
    question: questionReducer
})