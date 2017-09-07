import React from 'react';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducer/index';

const logger = createLogger();
const middleWare = applyMiddleware(thunk,logger);

const configureStore = (initialValue) =>createStore(rootReducer,middleWare);
	
export default configureStore;