import {
  auth,
  googleAuthProvider,
  DB,
} from "../../Firebase/Firebase-Configuration";

export var SignInWithGoogle = () => async (dispatch) => {
  try {
    var user = await auth.signInWithPopup(googleAuthProvider);
    var UserInfo = {
      id: user.user.uid,
      name: user.additionalUserInfo.profile.name,
      email: user.additionalUserInfo.profile.email,
      picture: user.additionalUserInfo.profile.picture,
    };

    var Data = await DB.collection("Users").doc(user.user.uid).get();
    if (Data.exists) {
      if (Data.data().title) {
        dispatch({
          type: "SET_PROFILE",
          payload: Data.data(),
        });

        dispatch({
          type: "SET_USER",
          payload: UserInfo,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: UserInfo,
        });
      }
    } else {
      dispatch({
        type: "SET_USER",
        payload: UserInfo,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export var SignUpWithEmailPass =
  (Name, Email, Password, SetError) => async (dispatch) => {
    try {
      var user = await auth.createUserWithEmailAndPassword(Email, Password);
      var profile = {
        id: user.user.uid,
        name: Name,
        email: Email,
        picture: null,
      };

      // localStorage.setItem("Auth",JSON.stringify(profile))

      await DB.collection("Users").doc(user.user.uid).set(profile);

      dispatch({
        type: "SET_USER",
        payload: profile
      });
    } catch (error) {
      if (error.code == "auth/email-already-in-use") SetError(true);
    }
  };

export var LoginWithEmailPass =
  (Email, Password, setError, setError2) => async (dispatch) => {
    try {
      var user = await auth.signInWithEmailAndPassword(Email, Password);
      var Data = await DB.collection("Users").doc(user.user.uid).get();
      if (Data.exists) {
        if (Data.data().title) {
          dispatch({
            type: "SET_PROFILE",
            payload: Data.data(),
          });

          dispatch({
            type: "SET_USER",
            payload: Data.data(),
          });
        } else {
          dispatch({
            type: "SET_USER",
            payload: Data.data(),
          });
        }
      }
    } catch (error) {
      console.error(error);
      if (error.code == "auth/user-not-found") setError(true);
      if (error.code == "auth/wrong-password") setError2(true);
    }
  };

export var LogOut = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({
      type: "REMOVE_USER",
      payload: null,
    });

    dispatch({
      type: "REMOVE_PROFILE",
      payload: null,
    });

    //redirect to auth page
  } catch (error) {
    console.log(error);
  }
};
