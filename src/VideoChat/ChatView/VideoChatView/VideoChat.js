import React,{useRef,useEffect} from 'react'
import './VideoChat.css'

var VideoChat = ({leaveCall,myVideoRef,userVideoRef,bool})=> {
    var classList = "flex chat-view-contt " + (bool ? 'opacity-1' : 'opacity-0')
    return (
        <div className={classList}>
            <video
                playsInline
                muted
                ref={myVideoRef}
                autoPlay
                style={{ width: "300px" }}
            />
            <video
                playsInline
                ref={userVideoRef}
                autoPlay
                style={{ width: "300px" }}
            />
            <button onClick={leaveCall}>Enddddd</button>
        </div>
    )
}

export default VideoChat
