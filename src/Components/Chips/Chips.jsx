import { withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { useStyles } from "./chips.style";

const Chips = ({ classes, name, checked=false, handleChange=null }) => {
  return (
    <Chip
      label={name}
      classes={{
        clickable	: {
          '&:focus': {
            backgroungColor: 'black'
          }
        }
      }}
      size="small"
      className={checked ? classes.checked : classes.simple}
      classes={{
        labelSmall: classes.label,
      }}
      onClick={handleChange}
    />
  );
};
export default withStyles(useStyles)(Chips);
