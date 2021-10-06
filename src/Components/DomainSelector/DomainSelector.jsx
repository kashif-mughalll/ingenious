import { withStyles, FormControl } from "@material-ui/core";
import { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import Chips from "../Chips/Chips";
import { useStyles } from "./domainSelector.style";

const DomainSelector = ({
  classes,
  keyWords,
  setKeyWords,
  setKeyWordsError
}) => {
  let temp = [];
  if(keyWords) temp = Object.entries(keyWords);
  return (
    <div className={classes.container}>
      <FormControl className={classes.checkGroup} component="fieldset">
        {temp.map(([name, checked]) => (
          <Chips
            key={name}
            name={name}
            checked={checked}
            handleChange={(e) => {
              setKeyWordsError(false);
              setKeyWords({
                ...keyWords,
                [e.target.innerText]: !checked,
              });
            }}
          />
        ))}
      </FormControl>
    </div>
  );
};
export default withStyles(useStyles)(DomainSelector);
