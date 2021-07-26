var initialState = null;

var IncomingCallReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SET_INCOMING_CALL": 
      return payload;
    case "REMOVE_INCOMING_CALL": 
      return null;
    default:
      return state;
  }
};

export default IncomingCallReducer;



