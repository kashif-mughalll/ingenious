import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./DashBoard.css";
import { Switch, Route } from "react-router-dom";
import FeedsView from "../Views/FeedsView/FeedsView";
import ProjectView from "./../Views/ProjectView/ProjectView";
import ProfileView from "./../Views/ProfileView/ProfileView";
import NotificationView from "./../Views/NotificationView/NotificationView";
import SocketConnection from "../../VideoChat/Connection/Connection";
import { connect } from "react-redux";
import { GetCollaborationRequests } from "../../Redux/Requests/RequestsActions";
import { GetAllProjects } from "./../../Redux/Projects/ProjectsActions";
import { GetKeywords } from './../../Redux/Keywords/KeywordsActions';

var Dashboard = ({ call, GetCollaborationRequests, GetAllProjects, GetKeywords }) => {
  useEffect(async () => {
    console.log("Mounting Dashboard");
    // SocketConnection();
    await GetKeywords()
    await GetAllProjects();
    await GetCollaborationRequests();
  }, []);

  return (
    <>
      {/* {call ? <ChatView/> : null} */}
      <Navbar />
      <div className="dashboard">
        <div></div>
        <div className="dashboard-center">
          <Switch>
            <Route exact path="/" component={FeedsView} />
            <Route path="/projects" component={ProjectView} />
            <Route path="/myprofile" component={ProfileView} />
            <Route path="/notification" component={NotificationView} />
          </Switch>
        </div>
        <div></div>
      </div>
    </>
  );
};

const mapState = (state) => {
  return {
    call: state.IncomingCall,
  };
};

const actions = {
  GetCollaborationRequests,
  GetAllProjects,
  GetKeywords
};

export default connect(mapState, actions)(Dashboard);

// function f() {
//   var obj = {
//     Html5: false,
//     CSS3: false,
//     JavaScript: false,
//     Angular: false,
//     React: false,
//     Redux: false,
//     BootStrap: false,
//     MaterialUI: false,
//     TypeScript : false,
//     Vue: false,
//     CMS :false,
//     Flutter: false,
//     firebase:false,
//     NodeJs:false,
//     MongoDB:false,
//     SQL: false,
//     MySql:false,
//     PHP:false,
//     wordPress: false,
//     Express:false
//   };

//   DB.collection('Keywords').doc('web-development').set(obj);
// }
