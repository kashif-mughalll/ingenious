import {auth,googleAuthProvider,DB} from '../../Firebase/Firebase-Configuration'


export var SignInWithGoogle = () => async (dispatch) => {
  try {
    var user = await auth.signInWithPopup(googleAuthProvider);
    var UserInfo = {
      id : user.user.uid,
      name : user.additionalUserInfo.profile.name,
      email : user.additionalUserInfo.profile.email,
      picture : user.additionalUserInfo.profile.picture
    }  

    dispatch({
      type: "SET_USER",
      payload : UserInfo
    })

    var {exists} = await DB.collection('Users').doc(user.user.uid).get();
    if(exists){
      // redirect to dashboard
    }else{
      // redirect ot profile creation page
    }

  } catch (error) {
    console.log(error);
  }

}


export var LogOut = () => async (dispatch) => {
  try {    
    await auth.signOut();
    dispatch({
      type: "REMOVE_USER",
      payload : null
    })      

    dispatch({
      type: "REMOVE_PROFILE",
      payload : null
    })


    //redirect to auth page

  } catch (error) {
    console.log(error);
  }
};


