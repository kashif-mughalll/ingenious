import React,{useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./DashBoard.css";
import { Switch, Route } from "react-router-dom";
import FeedsView from "../Views/FeedsView/FeedsView";
import ProjectView from "./../Views/ProjectView/ProjectView";
import ProfileView from './../Views/ProfileView/ProfileView';
import NotificationView from './../Views/NotificationView/NotificationView';
import SocketConnection from "../../VideoChat/Connection/Connection";
import { connect } from 'react-redux';
import ChatView from "../../VideoChat/ChatView/ChatView";
import {GetCollaborationRequests} from '../../Redux/Requests/RequestsActions'


var Dashboard = ({call,GetCollaborationRequests}) => {
  useEffect(() => {
    // SocketConnection();    
    GetCollaborationRequests();
  }, [])

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
    call : state.IncomingCall
  }
}

const actions = {
  GetCollaborationRequests
}

export default connect(mapState,actions)(Dashboard);
