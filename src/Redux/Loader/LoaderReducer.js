var initialState = false;

var LoaderReducer = (state = initialState, action) => {
  var { type } = action;
  switch (type) {
    case "SHOW_LOADER":
      return true;
    case "HIDE_LOADER":
      return false;
    default:
      return state;
  }
};

export default LoaderReducer;
