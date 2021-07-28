import { withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { useStyles } from "./chips.style";

const Chips = ({ classes, name, checked = false, handleChange = null }) => {
  return (
    <Chip
      label={name}
      // classes={{
      //   clickable	: 'ahad'
      // }}
      size="small"
      className={checked ? classes.checked : classes.simple}
      classes={{
        labelSmall: classes.label,
        clickable: classes.focus,
      }}
      onClick={handleChange}
    />
  );
};
export default withStyles(useStyles)(Chips);
