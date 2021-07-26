export var EndCall = () => (dispatch) => {
  dispatch({
    type: "REMOVE_INCOMING_CALL",
  });
};

export var CallUser = (Data) => (dispatch) => {
  dispatch({
    type: "SET_INCOMING_CALL",
    payload : Data
  });
};
