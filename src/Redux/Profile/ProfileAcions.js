import { DB } from "../../Firebase/Firebase-Configuration";

export var SetProfile = (profile) => async (dispatch) => {
  try {
    await DB.collection("Users").doc(profile.id).set(profile);
    dispatch({
      type: "SET_PROFILE",
      payload: profile,
    });
  } catch (error) {
    console.log(error);
  }
};


export var RemoveProfile = () => async (dispatch) => {
  dispatch({
    type: "REMOVE_PROFILE",
    payload: null,
  });
};
