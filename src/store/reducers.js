import C from '../constants';
import { combineReducers } from 'redux';

export const questions = (state = [], action) => {
    switch (action.type) {
    case C.IMPORT_QUESTIONS:
        return action.payload;
    case C.ADD_QUESTION:
        return [...state, action.payload];
    case C.DELETE_QUESTION:
        return state.filter(q => {
            return q.id !== action.payload.id;
        });
    case C.CLEAR_QUESTIONS:
        return [];
    default:
        return state;
    }
};

export default combineReducers({
    questions
});
