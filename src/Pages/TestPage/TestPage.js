// import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { RDB } from "../../Firebase/Firebase-Configuration";
import { LogOut, SignInWithGoogle } from "./../../Redux/Auth/authActions";
import { SetProfile } from "./../../Redux/Profile/ProfileAcions";

var TestPage = ({ SignInWithGoogle, Auth, SetProfile, LogOut }) => {
//   var [Data, setData] = useState(null);

  // useEffect(() => {
  //   const starCountRef = RDB.ref("Data/");
  //   starCountRef.on("value", (snapshot) => {
  //     if (snapshot.exists()) {
  //       const data = snapshot.val();
  //       console.log(data);
  //       setData(data);
  //     }
  //   });
  // }, []);

  //   var starCountRef = RDB.ref("posts/" + postId + "/starCount");

  //   console.log(starCountRef.on)

//   var AddDoc = async () => {
//     var Doc = {
//       name: "kashif",
//       id: "123",
//     };

//     var res = await RDB.ref("Data").push(Doc);
//     // console.log(res);
//     // console.log(res.key);
//   };

//   console.log("Rerendering");
  return (
    <div style={{ display: "flex", flexFlow: "column" }}>
      <button > Click ME </button>

      {/* <button
                onClick={()=> SignInWithGoogle()}
            >google sign in</button>

            <button
                onClick={()=> SetProfile(profile)}
            >update profile</button>

            <button
                onClick={()=> LogOut()}
            >logout</button> */}
    </div>
  );
};

var actions = {
  SignInWithGoogle,
  SetProfile,
  LogOut,
};

var mapState = (state) => {
  return {
    Auth: state.Auth,
  };
};

export default connect(mapState, actions)(TestPage);
