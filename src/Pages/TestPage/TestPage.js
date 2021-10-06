import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RDB } from "../../Firebase/Firebase-Configuration";
import { LogOut, SignInWithGoogle } from "./../../Redux/Auth/authActions";
import { SetProfile } from "./../../Redux/Profile/ProfileAcions";
import { CreateCollaborationRequest, GetCollaborationRequests } from './../../Redux/Requests/RequestsActions';

var TestPage = ({ SignInWithGoogle, Auth, SetProfile, LogOut ,CreateCollaborationRequest,GetCollaborationRequests}) => {
  var [Data, setData] = useState(null);

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

  // var starCountRef = RDB.ref("posts/" + postId + "/starCount");

  // console.log(starCountRef.on)

  // var AddDoc = async () => {
  //   var Doc = {
  //     name: "kashif",
  //     id: "123",
  //   };

  // var res = await RDB.ref("Data").push(Doc);
  // console.log(res);
  // console.log(res.key);

  useEffect(() => {
    // const starCountRef = RDB.ref("Requests/");
    // starCountRef.on("value", (snapshot) => {
    //   if (snapshot.exists()) {
    //     const data = snapshot.val();
    //     console.log(data);
    //     setData(data);
    //   }
    // });
  }, []);

  console.log("Rerendering");
  GetCollaborationRequests();
  return (
    <div>
      <button
        onClick={async () => {
          // const Requests = RDB.ref("Requests/");
          // Requests.child("idds2").set({name:'kashif',Arr:["kashif","hamza"]})
          CreateCollaborationRequest({name:"hamza"});          
        }}
      >Click ME
      </button>
    </div>
  );
};

var actions = {
  SignInWithGoogle,
  SetProfile,
  LogOut,
  CreateCollaborationRequest,
  GetCollaborationRequests
};

var mapState = (state) => {
  return {
    Auth: state.Auth,
  };
};

export default connect(mapState, actions)(TestPage);
