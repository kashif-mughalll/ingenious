import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ProjectViewBtn from "../../../Components/ProjectViewBtn/ProjectViewBtn";
import "./ProjectView.css";
import CreateProjectView from "./../CreateProjectView/CreateProjectView";
import MyProjectsView from "./../MyProjectsView/MyProjectsView";
import MyCollaborationView from "./../MyCollaborationView/MyCollaborationView";
import { withRouter } from "react-router-dom";

var ProjectView = ({ location }) => {
  var token = String(location.pathname).split("/");
  const [state, setState] = useState(token[2] ? token[2] : "myprojects");
  return (
    <div className="project-view-cont">
      <div className="project-router-btns">
        <ProjectViewBtn
          text={"Create New Project"}
          state={state}
          setState={setState}
          route="/projects/createproject"
          link="createproject"
        />
        <ProjectViewBtn
          text={"My Projects"}
          state={state}
          setState={setState}
          route="/projects/myprojects"
          link="myprojects"
        />
        <ProjectViewBtn
          text={"My Collaborations"}
          state={state}
          setState={setState}
          route="/projects/mycollaboration"
          link="mycollaboration"
        />
      </div>
      <Switch>
        <Route path={"/projects/createproject"} component={CreateProjectView} />
        <Route path={"/projects/myprojects"} component={MyProjectsView} />
        <Route path={"/projects/mycollaboration"} component={MyCollaborationView} />
      </Switch>
    </div>
  );
};

export default withRouter(ProjectView);
