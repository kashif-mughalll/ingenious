import {
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./checkBox.style";

const Check = ({ classes, name, checked, handleChange }) => {
  return (
      <FormControlLabel
        classes={{
          label: classes.label,
        }}
        className={classes.fixWidth}
        control={
          <Checkbox
            name={name}
            checked={checked}
            onChange={handleChange}
            color="primary"
          />
        }
        label={name}
      />
  );
};
export default withStyles(useStyles)(Check);
