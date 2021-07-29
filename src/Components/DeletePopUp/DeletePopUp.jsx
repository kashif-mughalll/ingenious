import { withStyles } from "@material-ui/core";
import { useStyles } from "./deletePopUp.style";
import { DeleteRequest } from "./../../Redux/Requests/RequestsActions";
import { connect } from "react-redux";
import { HideModal } from "../../Redux/Modal/ModalActions";
import {
  DeleteProject,
  GetMyProjects,
} from "../../Redux/PostedProjects/PostedProjectsAction";
import { HideLoader, ShowLoader } from "./../../Redux/Loader/LoaderActions";
const DeletePopUp = ({
  classes,
  DeleteRequest,
  DeleteProject,
  HideModal,
  Data,
  GetMyProjects,
  ShowLoader,
  HideLoader,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <b>Delete</b>
      </div>
      <div className={classes.description}>
        Are you sure want to delete this?
      </div>
      <div className={classes.buttons}>
        <button className={classes.accept} onClick={HideModal}>
          Cancel
        </button>
        <button
          className={classes.reject}
          onClick={async () => {
            ShowLoader();
            switch (Data[0]) {
              case "notification":
                await DeleteRequest(Data[1]);
                break;
              case "project":
                await DeleteProject(Data[1]);
                await GetMyProjects();
                break;
              default:
                break;
            }
            HideModal();
            HideLoader();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const actions = {
  GetMyProjects,
  DeleteRequest,
  DeleteProject,
  HideModal,
  ShowLoader,
  HideLoader,
};

export default connect(null, actions)(withStyles(useStyles)(DeletePopUp));
