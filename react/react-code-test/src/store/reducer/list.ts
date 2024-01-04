const initState = [];

const listReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD': 
      return state.concat([action.text]);
    default:
      return state;
  }
}

export default listReducer;