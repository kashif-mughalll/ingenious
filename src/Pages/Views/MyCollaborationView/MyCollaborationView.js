import { connect } from "react-redux";
import CollaborationCard from "../../../Components/CollaborationCard/CollaborationCard";
import "./MyCollaborationView.css";
import { GetMyCollaborations } from "./../../../Redux/Collaborations/CollaborationsActions";
import { useEffect } from "react";
import { v4 as Uuid } from "uuid";
import { HideLoader, ShowLoader } from "./../../../Redux/Loader/LoaderActions";
import { GetAllProjects } from "./../../../Redux/Projects/ProjectsActions";

var MyCollaborationView = ({
  Collaborations,
  GetMyCollaborations,
  ShowLoader,
  HideLoader,
  GetAllProjects
}) => {
  useEffect(async () => {
    ShowLoader();
    await GetAllProjects();
    await GetMyCollaborations();
    HideLoader();
  }, []);

  return (
    <div className="my-collaboration-view-cont">
      <h1 className="my-collaboration-view-head">My Collaborations</h1>
      {Collaborations
        ? Collaborations.map((element) => (
            <CollaborationCard key={Uuid()} {...element} />
          ))
        : null}
    </div>
  );
};

const mapState = (state) => ({
  Collaborations: state.Collaborations,
});

const actions = {
  GetMyCollaborations,
  ShowLoader,
  HideLoader,
  GetAllProjects
};

export default connect(mapState, actions)(MyCollaborationView);
