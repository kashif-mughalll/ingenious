var initialState = [];

var RequestsReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SET_REQUESTS": 
      return payload;
    case "REMOVE_REQUESTS": 
      return null;
    default:
      return state;
  }
};

export default RequestsReducer;


