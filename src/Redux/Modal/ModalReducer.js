var initialState = null;

var ModalReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SHOW_MODAL": 
      return payload;
    case "HIDE_MODAL": 
      return null;
    default:
      return state;
  }
};

export default ModalReducer;



