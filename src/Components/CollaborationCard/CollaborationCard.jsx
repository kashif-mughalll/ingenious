import { withStyles } from "@material-ui/core"
import { useStyles } from "./collaborationCard.style"
import { connect } from "react-redux";
import { ShowModal } from "../../Redux/Modal/ModalActions";
import DeletePopUp from "../DeletePopUp/DeletePopUp";

const CollaborationCard = ({
  classes,
  ShowModal,
  id,
  rid,
  pid,
  name,
  picture,
  keywords,
  title
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img src={picture} alt="profile picture" />
      </div>
      <div className={classes.details}>
        You have collaborated in <b>{name}'s</b> project <b>"{title}"</b> as <b>{keywords.join(", ")}</b>
      </div>
      <div className={classes.buttons}>
        <button
          className={classes.reject}
          onClick={() => {
            ShowModal(DeletePopUp, ["collaboration", {rid,pid,id}]);
          }}
        >
          <i className="far fa-trash-alt"></i>
          Cancle Collaboration
        </button>
      </div>
    </div>
  );
};

const actions = {
  ShowModal,
};

export default connect(null, actions)(withStyles(useStyles)(CollaborationCard));
