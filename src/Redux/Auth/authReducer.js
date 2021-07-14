var initialState = null;

var authReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SET_USER": 
      return payload;
    case "REMOVE_USER": 
      return null;
    default:
      return state;
  }
};

export default authReducer;
