import React, { useState, useEffect, useRef } from "react";
import "./ChatView.css";
import { connect } from "react-redux";
import Calling from "./Calling/Calling";
import Peer from "simple-peer";
import { EndCall } from "./../../Redux/IncomingCall/IncomingCallActions";
import VideoChat from "./VideoChatView/VideoChat";

var ChatView = ({ Socket, Data, EndCall }) => {
  const [CallAccepted, setCallAccepted] = useState(false);
  const [myStream, setMyStream] = useState();
  const [CallEnded, setCallEnded] = useState(false);
  const [userStream, setUserStream] = useState();

  // Refs
  const myVideoRef = useRef();
  const userVideoRef = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setMyStream(stream);
        myVideoRef.current.srcObject = stream;
      });
    if (Data.initiator) StartCall();
  }, []);

  // when i am calling some one

  //   var Data = {
  //     initiator: false,
  //     caller: {
  //       id: "uid of caller",
  //       name: "muhammad kashif mughal",
  //       picture:
  //         "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  //     },
  //     signalData: "Peer to peer data element",
  //     to: "uid of second person you are calling",
  //   };

  var LeaveCall = () => {
    connectionRef.current.destroy();
    setCallEnded(true);
  };

  const StartCall = () => {
    console.log("calling...");

    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: myStream
    });

    peer.on("signal", (data) => {
      Socket.emit("callUser", {
        caller: Data.caller,
        to: Data.to,
        signalData: data,
      });
    });

    peer.on("stream", (stream) => {
      console.log("ref set")
      userVideoRef.current.srcObject = stream;
      // setUserStream(stream);
    });

    Socket.on("callAccepted", (signalData) => {
      console.log("call accepted");
      setCallAccepted(true);
      peer.signal(signalData);
    });

    connectionRef.current = peer;
  };

  var acceptCall = () => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: myStream,
    });

    peer.on("signal", (data) => {
      Socket.emit("answerCall", { signalData: data, to: Data.caller.id });
    });
    peer.on("stream", (stream) => {
      console.log("ref set")
      userVideoRef.current.srcObject = stream;
    });
    peer.signal(Data.signalData);
    connectionRef.current = peer;
    setCallAccepted(true);
  };

  return (
    <>
    <div className="chat-view-cont">
    <VideoChat myVideoRef={myVideoRef} userVideoRef={userVideoRef} />
      {CallAccepted ? (
        <div></div>
      ) : (
        <div className="chat-view-cont">
          {Data.initiator ? (
            <Calling caller={Data.caller} leaveCall={LeaveCall} />
          ) : (
            <Calling
              caller={Data.caller}
              leaveCall={LeaveCall}
              inComing
              acceptCall={acceptCall}
            />
          )}
        </div>
      )}
    </div>
    </>
  );

  // return CallAccepted ? (
  //   CallEnded ? (
  //     EndCall()
  //   ) : (
  //     <div></div>
  //   )
  // ) : (
  //   <div className="chat-view-cont">
  //     {Data.initiator ? (
  //       <Calling caller={Data.caller} leaveCall={LeaveCall} />
  //     ) : (
  //       <Calling
  //         caller={Data.caller}
  //         leaveCall={LeaveCall}
  //         inComing
  //         acceptCall={acceptCall}
  //       />
  //     )}
  //   </div>
  // );
};

const mapState = (state) => {
  return {
    Socket: state.Socket,
    Data: state.IncomingCall,
    Auth: state.Auth,
  };
};

const actions = {
  EndCall,
};

export default connect(mapState, actions)(ChatView);
