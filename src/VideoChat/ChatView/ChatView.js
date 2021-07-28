import React, { useState, useEffect, useRef } from "react";
import "./ChatView.css";
import { connect } from "react-redux";
import Calling from "./Calling/Calling";
import Peer from "simple-peer";
import { EndCall } from "./../../Redux/IncomingCall/IncomingCallActions";
import VideoChat from "./VideoChatView/VideoChat";

var ChatView = ({ Socket, Data, EndCall }) => {
  const [CallAccepted, setCallAccepted] = useState(false);
  const [CallEnded, setCallEnded] = useState(false);
  const [CallInProcess, setCallInProcess] = useState(true);

  const [myStream, setMyStream] = useState();
  const [CallerData, setCallerData] = useState();

  // Refs
  const myVideoRef = useRef();
  const userVideoRef = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    console.log("UseEffect running....")
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setMyStream(stream);
        myVideoRef.current.srcObject = stream;
        if (Data.initiator) StartCall();  // set timeout for save side
      })
  }, [])


  var LeaveCall = () => {
    setCallInProcess(false);
    connectionRef.current.destroy();
    // setCallEnded(true);
  };

  const StartCall = () => {
    console.log("starting a call...");

    var peer = new Peer({
      initiator: true,
      trickle: false,
      stream: myStream
    });

    peer.on("signal", (data) => {
      console.log("recieved my signal data")
      Socket.emit("callUser", {
        caller: Data.caller,
        to: Data.to,
        signalData: data,
      });
    });

    peer.on("stream", (stream) => {
      console.log("user video stream found")
      userVideoRef.current.srcObject = stream;
    });

    Socket.on("callAccepted", (signalData) => {
      console.log("call accepted");
      peer.signal(signalData);
      // setCallAccepted(true);
      setCallInProcess(false);
    });

    connectionRef.current = peer;
  };

  var acceptCall = () => {
    console.log("accepting call...")

    const peer1 = new Peer({
      initiator: false,
			trickle: false,
			stream: myStream
    });

    peer1.on("signal", (data) => {
      console.log("Answering multiple time")
      Socket.emit("answerCall", { signalData: data, to: Data.caller.id })
    });

    peer1.on("stream", (stream) => {
      console.log("user video stream found")
      userVideoRef.current.srcObject = stream;
    });

    peer1.signal(Data.signalData);

    connectionRef.current = peer1;

    setCallInProcess(false);
    // setCallAccepted(true);
  };

  return (    
    <div classname="chat-view-cont">      
      <VideoChat leaveCall={LeaveCall} myVideoRef={myVideoRef} userVideoRef={userVideoRef} bool={true} />
      {CallInProcess ? 
      <div>
        {
          Data.initiator ? <Calling caller={Data.caller} leaveCall={LeaveCall} /> : 
          <Calling caller={Data.caller} leaveCall={LeaveCall} inComing acceptCall={acceptCall} />
        }
      </div> 
      : null}
    </div>
  );
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
