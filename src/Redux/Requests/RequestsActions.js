import { RDB } from "../../Firebase/Firebase-Configuration";

export var CreateCollaborationRequest = (Obj) => async (dispatch, getState) => {
  try {
    const id = Obj.id;
    RDB.ref(`Requests/${id}`).once("value", (snapshot) => {
      if (snapshot.exists()) {
        const List = (snapshot.val()).list;
        List.push(Obj)
        console.log(List);
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
        console.log(List)
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
