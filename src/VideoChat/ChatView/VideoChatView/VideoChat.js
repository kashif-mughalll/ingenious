import React,{useRef,useEffect} from 'react'
import './VideoChat.css'

var VideoChat = ({leaveCall,myVideoRef,userVideoRef})=> {
    return (
        <div className="chat-view-cont flex1">
            <video
                playsInline
                ref={myVideoRef}
                autoPlay
                style={{ width: "300px" }}
            />
            <video
                playsInline
                muted
                ref={userVideoRef}
                autoPlay
                style={{ width: "300px" }}
            />
            <button onClick={leaveCall}>Enddddd</button>
        </div>
    )
}

export default VideoChat
