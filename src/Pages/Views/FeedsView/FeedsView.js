import React, { useEffect } from "react";
import PostCard from "../../../Components/PostCard/PostCard";
import "./FeedsView.css";
import { GetAllProjects } from "./../../../Redux/Projects/ProjectsActions";
import { connect } from "react-redux";

var FeedsView = ({ GetAllProjects, projects }) => {
  useEffect(() => {
    GetAllProjects();
  }, []);
  return (
    <div className="feeds-view">
      {projects.map((project) => (
        <PostCard key={project.id} project={project} />
      ))}
    </div>
  );
};

var actions = {
  GetAllProjects,
};

const mapState = (state) => {
  return {
    projects: state.Projects,
  };
};

export default connect(mapState, actions)(FeedsView);
