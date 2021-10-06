import { DB } from "./../../Firebase/Firebase-Configuration";


export var GetKeywords = () => async (dispatch) => {
  var keyWords = await DB.collection("Keywords").doc("web-development").get();
  dispatch({
    type: "SET_KEYWORDS",
    payload: keyWords.data(),
  });
};
