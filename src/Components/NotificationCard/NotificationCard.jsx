import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { useStyles } from "./notification.style";
import { ShowModal } from '../../Redux/Modal/ModalActions'
import DeletePopUp from "../DeletePopUp/DeletePopUp";

const NotificationCard = ({ classes, ShowModal, id, rid, pid, info, keywords, title }) => {
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }
  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img src={info.picture} alt="profile picture" />
      </div>
      <div className={classes.details}>
        <b>{titleCase(info.name)}</b> has requested you to collaborate in your
        project <b>"{title}"</b> as <b>{keywords.join(", ")}</b>
      </div>
      <div className={classes.buttons}>
        <button className={classes.accept}>
          <i className="fas fa-user-plus"></i>
        </button>
        <button className={classes.call}>
          <i className="fas fa-phone"></i>
        </button>
        <button className={classes.reject} onClick={()=>{ShowModal(DeletePopUp, ['notification',rid])}}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

const actions = {
    ShowModal
}

export default connect(null, actions)(withStyles(useStyles)(NotificationCard));
