import React from "react";
import "./ProjectViewBtn.css";
import { Link } from "react-router-dom";

var ProjectViewBtn = ({ text, state, setState, route ,link}) => {
  let classes = "project-view-btn-style ";
  if (link === state) classes += "project-view-btn-style-border";
  return (
    <Link to={route} style={{ textDecoration: "none" }} onClick={() => setState(link)}>
      <div className={classes}>
        {text}
      </div>
    </Link>
  );
};

export default ProjectViewBtn;
