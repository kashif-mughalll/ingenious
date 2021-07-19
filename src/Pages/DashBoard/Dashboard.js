import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./DashBoard.css";
import { Switch, Route } from "react-router-dom";
import FeedsView from "../Views/FeedsView/FeedsView";
import ProjectView from "./../Views/ProjectView/ProjectView";
import ProfileView from './../Views/ProfileView/ProfileView';
import NotificationView from './../Views/NotificationView/NotificationView';

var Dashboard = ({}) => {
  return (
    <>
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

export default Dashboard;
