const cataasReducer = (state = {}, action) => {
    switch (action.type) {
      case 'HERE_CATAAS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default cataasReducer;