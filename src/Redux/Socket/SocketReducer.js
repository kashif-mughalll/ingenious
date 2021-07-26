var initialState = null;

var SocketReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SET_SOCKET": 
      return payload;
    case "REMOVE_SOCKET": 
      return null;
    default:
      return state;
  }
};

export default SocketReducer;



