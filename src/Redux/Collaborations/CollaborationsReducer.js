var initialState = [];

var CollaborationsReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SET_COLLABORATION": 
      return payload;
    case "REMOVE_COLLABORATION": 
      return [];
    default:
      return state;
  }
};

export default CollaborationsReducer;



