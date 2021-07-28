import { withStyles } from "@material-ui/core";
import { useStyles } from "./deletePopUp.style";

const DeletePopUp = ({classes}) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}><b>Delete</b></div>
      <div className={classes.description}>
        Are you sure want to delete this?
      </div>
      <div className={classes.buttons}>
        <button className={classes.accept}>
          Cancel
        </button>
        <button className={classes.reject}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default withStyles(useStyles)(DeletePopUp);
