export var ShowModal = (Form,data) => (dispatch) => {
  dispatch({
    type: "SHOW_MODAL",
    payload: {Form,data}
  });
};

export var HideModal = () => (dispatch) => {
  dispatch({
    type: "HIDE_MODAL",
    payload: null,
  });
};
