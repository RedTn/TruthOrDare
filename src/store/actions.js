import C from '../constants';
const uuidv1 = require('uuid/v1');

export const addQuestion = payload => {
    return {
        type: C.ADD_QUESTION,
        payload: {
            id: uuidv1(),
            ...payload
        }
    };
};

export const importQuestions = payload => {
    return {
        payload,
        type: C.IMPORT_QUESTIONS
    };
};

export const deleteQuestion = payload => {
    return {
        payload,
        type: C.DELETE_QUESTION
    };
};

export const clearQuestions = () => {
    return {
        type: C.CLEAR_QUESTIONS
    };
};
