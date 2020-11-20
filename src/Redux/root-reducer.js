//Represents overall reducer (combination of all reducers)
import { combineReducers } from 'redux';
import dataReducer from './reducer';

const rootReducer = combineReducers({
   data: dataReducer,
});

export default rootReducer;
