import { RDB } from "../../Firebase/Firebase-Configuration";

export var CreateCollaborationRequest = (Obj) => async (dispatch, getState) => {
  try {
    const id = Obj.id;
    RDB.ref(`Requests/${id}`).once("value", (snapshot) => {
      if (snapshot.exists()) {
        const List = snapshot.val().list;
        List.push(Obj);
        RDB.ref(`Requests/`).child(id).set({ list: List });
      } else {
        RDB.ref(`Requests/`)
          .child(id)
          .set({ list: [Obj] });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export var GetCollaborationRequests = () => async (dispatch, getState) => {
  try {
    const id = getState().Auth.id;
    const Requests = RDB.ref(`Requests/${id}`);
    Requests.on("value", (snapshot) => {
      if (snapshot.exists()) {
        const List = snapshot.val().list;
        dispatch({
          type: "SET_REQUESTS",
          payload: List,
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export var DeleteRequest = (rid) => async (dispatch, getState) => {
  try {
    const List = [];
    getState().Requests.forEach((element) => {
      if (element.rid != rid) List.push(element);
    });

    RDB.ref(`Requests/`).child(getState().Auth.id).set({ list: List });    
    dispatch({
      type: "SET_REQUESTS",
      payload: List,
    });
  } catch (error) {
    console.error(error);
  }
};

export var AcceptRequest = (rid) => async (dispatch, getState) => {
  try {
    const List = [];
    getState().Requests.forEach((element) => {
      if (element.rid != rid) List.push(element);
    });

    RDB.ref(`Requests/`).child(getState().Auth.id).set({ list: List });    
    dispatch({
      type: "SET_REQUESTS",
      payload: List,
    });
  } catch (error) {
    console.error(error);
  }
};
