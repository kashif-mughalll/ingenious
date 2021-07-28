import { withStyles } from "@material-ui/core";
import { useStyles } from "./deletePopUp.style";
import { DeleteRequest } from "./../../Redux/Requests/RequestsActions";
import { connect } from "react-redux";
import { HideModal } from "../../Redux/Modal/ModalActions";

const DeletePopUp = ({ classes, DeleteRequest, HideModal, Data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <b>Delete</b>
      </div>
      <div className={classes.description}>
        Are you sure want to delete this?
      </div>
      <div className={classes.buttons}>
        <button className={classes.accept}>Cancel</button>
        <button
          className={classes.reject}
          onClick={() => {
            switch (Data[0]) {
              case 'notification':
                DeleteRequest(Data[1]);
                break;
              case 'post':
                DeleteRequest(Data[1]);
                break
              default:
                break;
            }
            
            HideModal();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const actions = {
  DeleteRequest,
  HideModal
};

export default connect(null, actions)(withStyles(useStyles)(DeletePopUp));
