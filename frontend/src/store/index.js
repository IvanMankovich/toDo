import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import thunk  from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk, promise)));

export default store;