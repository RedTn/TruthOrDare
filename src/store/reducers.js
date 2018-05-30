import C from '../constants';
import { combineReducers } from 'redux';

export const questions = (state = {}, action) => {
    switch (action.type) {
    case C.IMPORT_QUESTIONS:
        return '';
    default:
        return state;
    }
};

export default combineReducers({
    // allSkiDays,
    // goal,
    // errors,
    // resortNames: combineReducers({
    //     fetching,
    //     suggestions
    // })
});
