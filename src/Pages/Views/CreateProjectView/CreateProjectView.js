import React from "react";
import CreateProjectForm from "../../../Components/CreateProjectForm/CreateProjectForm";
import "./CreateProjectView.css";

var CreateProjectView = ({setRouter}) => {
  return (
    <div className="flex">
      <CreateProjectForm/>
    </div>
  );
};

export default CreateProjectView;
