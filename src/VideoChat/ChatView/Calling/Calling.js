import React from "react";

var Calling = ({ caller, leaveCall, inComing , acceptCall}) => {
  return (
    <div className="calling-to-id-cont2 flex">
      <div className="calling-to-id flex1">
        <div className="calling-to-id-pic-rapper flex">
          <img className="calling-to-id-pic" src={caller.picture} alt="" />
        </div>
        <p className="calling-to-id-name">
          {inComing
            ? `${caller.name} is calling`
            : `Calling ${caller.name}`}
        </p>
        {inComing ? null : <p className="calling-to-id-ring">Ringing...</p>}
        <div className="gap-2"></div>
        <div className="flex">
          {inComing ? (
            <button className="accept-call-btn" onClick={acceptCall}>
              <i className="fas fa-phone icon32-stye1"></i>
            </button>
          ) : null}
          <button className="leave-call-btn" onClick={leaveCall}>
            <i className="fas fa-phone-slash icon32-stye1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calling;
