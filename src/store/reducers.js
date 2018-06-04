import C from '../constants';
import { combineReducers } from 'redux';

export const truths = (state = [], action) => {
    switch (action.type) {
    case C.ADD_TRUTH:
        return [...state, action.payload];
    case C.IMPORT_TRUTHS:
        return action.payload;
    case C.DELETE_TRUTH:
        return state.filter(t => t.id !== action.payload.id);
    case C.CLEAR_TRUTHS:
        return [];
    default:
        return state;
    }
};

export const dares = (state = [], action) => {
    switch (action.type) {
    case C.ADD_DARE:
        return [...state, action.payload];
    case C.IMPORT_DARES:
        return action.payload;
    case C.DELETE_DARE:
        return state.filter(d => d.id !== action.payload.id);
    case C.CLEAR_DARES:
        return [];
    default:
        return state;
    }
};

export default combineReducers({
    questions: combineReducers({
        truths,
        dares
    })
});
