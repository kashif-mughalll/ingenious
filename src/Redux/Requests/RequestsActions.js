import { RDB } from "../../Firebase/Firebase-Configuration";

export var CreateCollaborationRequest = (Obj) => async (dispatch) => {
  try {
    const Requests = RDB.ref("Requests/");

    starCountRef.on("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
      }
    });

    Requests.child("idds2").set();

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
