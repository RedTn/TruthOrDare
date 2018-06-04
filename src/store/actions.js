import C from '../constants';
const uuidv1 = require('uuid/v1');

export const addTruth = payload => {
    return {
        type: C.ADD_TRUTH,
        payload: {
            id: uuidv1(),
            value: payload
        }
    };
};

export const addDare = payload => {
    return {
        type: C.ADD_DARE,
        payload: {
            id: uuidv1(),
            value: payload
        }
    };
};

export const importTruths = payload => {
    return {
        payload,
        type: C.IMPORT_TRUTHS
    };
};

export const importDares = payload => {
    return {
        payload,
        type: C.IMPORT_DARES
    };
};

export const deleteTruth = payload => {
    return {
        payload,
        type: C.DELETE_TRUTH
    };
};

export const deleteDare = payload => {
    return {
        payload,
        type: C.DELETE_DARE
    };
};

export const clearTruths = () => {
    return {
        type: C.CLEAR_TRUTHS
    };
};

export const clearDares = () => {
    return {
        type: C.CLEAR_DARES
    };
};
