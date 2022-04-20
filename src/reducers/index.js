import {combineReducers} from 'redux';
import usersReducer from '.';

const rootReducers = combineReducers({    
    usersData : usersReducer      
});
export default rootReducers;