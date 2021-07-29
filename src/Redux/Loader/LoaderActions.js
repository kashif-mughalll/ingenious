export var ShowLoader = () => (dispatch) => {
  dispatch({
    type: "SHOW_LOADER",
  });
};

export var HideLoader = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "HIDE_LOADER",
    });
  }, 1000);
};
