import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { useStyles } from "./notification.style";
import { ShowModal } from "../../Redux/Modal/ModalActions";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import {AddCollaborator} from '../../Redux/Projects/ProjectsActions'
import { DeleteRequest } from './../../Redux/Requests/RequestsActions';
import { HideLoader, ShowLoader } from './../../Redux/Loader/LoaderActions';

const NotificationCard = ({
  AddCollaborator,
  classes,
  ShowModal,
  id,
  rid,
  pid,
  info,
  keywords,
  title,
  DeleteRequest,
  ShowLoader,
  HideLoader
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img src={info.picture} alt="profile picture" />
      </div>
      <div className={classes.details}>
        <b>{info.name}</b> has requested you to collaborate in your
        project <b>"{title}"</b> as <b>{keywords.join(", ")}</b>
      </div>
      <div className={classes.buttons}>
        <button
          className={classes.accept}
          onClick={async () => {
            ShowLoader();
            var Obj = {
              name : info.name,
              picture : info.picture,
              id : info.id,
              rid,
              pid,
              keywords,
              title
            }
            await AddCollaborator(Obj);
            await DeleteRequest(rid);
            HideLoader();
          }}
        >
          <i className="fas fa-user-plus"></i>
        </button>
        <button className={classes.call}>
          <i className="fas fa-phone"></i>
        </button>
        <button
          className={classes.reject}
          onClick={() => {
            ShowModal(DeletePopUp, ["notification", rid]);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

const actions = {
  ShowModal,
  AddCollaborator,
  DeleteRequest,
  ShowLoader,
  HideLoader
};

export default connect(null, actions)(withStyles(useStyles)(NotificationCard));
