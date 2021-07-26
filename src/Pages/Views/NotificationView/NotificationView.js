import React, { useEffect } from "react";
import { RDB } from "../../../Firebase/Firebase-Configuration";
import "./NotificationView.css";
import { connect } from "react-redux";
import NotificationCard from "../../../Components/NotificationCard/NotificationCard";

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

  return (
    <div className="notification-view-cont">
        <h1 className='notification-view-heading'>Notifications</h1>
        <NotificationCard />
    </div>
)
};

const mapState = (state) => {
  return {
    id: state.Auth.id,
  };
};

export default connect(mapState)(NotificationView);