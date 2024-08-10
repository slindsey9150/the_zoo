import { combineReducers } from 'redux';

const mypetsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'HERE_MYPET':
        return action.payload;
      default:
        return state;
    }
  };
  const mypetReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ALL_MYPETS':
        return action.payload
      default:
        return state;
    }
  };
  
  
  // user will be on the redux state at:
  // state.user
  export default combineReducers({
    mypetsReducer,
    mypetReducer,
  });