var initialState = null;

var KeywordsReducer = (state = initialState, action) => {
  var { type,payload } = action;
  switch (type) {
    case "SET_KEYWORDS":
      return payload;
    default:
      return state;
  }
};

export default KeywordsReducer;


