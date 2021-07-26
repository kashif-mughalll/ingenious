export var CreateCollaborationRequest = (Obj) => async (dispatch) => {
  try {
    dispatch({
      type: "HIDE_MODAL",
      payload: null,
    });
  } catch (error) {
    console.error(error);
  }
};

export var GetCollaborationRequests = () => async (dispatch) => {
  try {

    


    dispatch({
      type: "HIDE_MODAL",
      payload: null,
    });
  } catch (error) {
    console.error(error);
  }
};
