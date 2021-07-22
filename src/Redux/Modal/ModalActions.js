export var ShowModal = (Form) => (dispatch) => {
  dispatch({
    type: "SHOW_MODAL",
    payload: Form,
  });
};

export var HideModal = () => (dispatch) => {
  dispatch({
    type: "HIDE_MODAL",
    payload: null,
  });
};
