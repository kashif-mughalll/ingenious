import { withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { useStyles } from "./chips.style";

const Chips = ({ classes, name, checked = false, handleChange = null }) => {
  return (
    <Chip
      label={name}
      size="small"
      className={checked ? classes.checked : classes.simple}
      classes={{
        labelSmall: classes.label,
        clickable: checked ? classes.focusChecked : classes.focusUnChecked,
      }}
      onClick={handleChange}
    />
  );
};
export default withStyles(useStyles)(Chips);
