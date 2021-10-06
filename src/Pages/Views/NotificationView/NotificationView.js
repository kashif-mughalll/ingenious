import { RDB } from "../../../Firebase/Firebase-Configuration";
import "./NotificationView.css";
import { connect } from "react-redux";
import NotificationCard from "../../../Components/NotificationCard/NotificationCard";

var NotificationView = ({ requests }) => {
  return (
    <div className="notification-view-cont">
      <h1 className="notification-view-heading">Notifications</h1>
      {requests.map( request => <NotificationCard key={request.rid} {...request} />)}
    </div>
  );
};

const mapState = (state) => {
  return {
    requests : state.Requests
  };
};

export default connect(mapState)(NotificationView);
