import appReducer from './reducers';
import { createStore } from 'redux';

export default (initialState = {}) => {
    return createStore(appReducer, initialState);
};
