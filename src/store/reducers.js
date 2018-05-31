import C from '../constants';
import { combineReducers } from 'redux';

export const questions = (state = [], action) => {
    switch (action.type) {
    case C.IMPORT_QUESTIONS:
        return action.payload;
    default:
        return state;
    }
};

export default combineReducers({
    questions
});
