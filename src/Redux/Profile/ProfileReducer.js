var initialState = null;

var ProfileReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SET_PROFILE": 
      return payload;
    case "REMOVE_PROFILE": 
      return null;
    default:
      return state;
  }
};

export default ProfileReducer;
