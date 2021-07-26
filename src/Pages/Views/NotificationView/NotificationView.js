import React, { useEffect } from "react";
import { RDB } from "../../../Firebase/Firebase-Configuration";
import "./NotificationView.css";
import { connect } from "react-redux";

var NotificationView = ({ id }) => {
  var FakeRequest = {
    requests: [
      {
        requestSender: "userId",
        pid: "project id",
        domains: ["electrical", "machanical"],
      },
      {},
    ],
  };

  RDB.ref("Requests").push();

  useEffect(() => {
    const RequestsRef = RDB.ref(`Requests/${id}/requests`);
    RequestsRef.on("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
      }
    });
  }, []);

  return <div className="notification-view-cont">Notification View</div>;
};

const mapState = (state) => {
  return {
    id: state.Auth.id,
  };
};

export default connect(mapState)(NotificationView);
