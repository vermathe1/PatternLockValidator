import React from 'react';
import {combineReducers} from 'redux';
import InputLock from './inputLock';
import ValidateLock from './validateLock';

const rootReducer =  combineReducers({InputLock,ValidateLock});
export default rootReducer;