import { withStyles, FormControl } from "@material-ui/core";
import CheckBox from "../CheckBox/CheckBox";
import { useStyles } from "./domainSelector.style";

const DomainSelector = ({
  classes,
  keyWords,
  setKeyWords,
  setKeyWordsError,
}) => {
  let temp = Object.entries(keyWords);
  return (
    <div className={classes.container}>
      <FormControl
        className={classes.checkGroup}
        component="fieldset"
      >
        {temp.map(([name, checked]) => (
          <CheckBox
            key={name + Math.random(100)}
            name={name}
            checked={checked}
            handleChange={(e) => {
              setKeyWordsError(false);
              setKeyWords({
                ...keyWords,
                [e.target.name]: e.target.checked,
              });
            }}
          />
        ))}
      </FormControl>
    </div>
  );
};
export default withStyles(useStyles)(DomainSelector);
