import { withStyles, FormControl } from "@material-ui/core";
<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> 04c29237b1e587f6b7b13ced0f7b6b5c329ea777
import CheckBox from "../CheckBox/CheckBox";
import Chips from "../Chips/Chips";
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
<<<<<<< HEAD
          <Chips
            name={name}
            checked={checked}
            handleChange={(e) => {
              console.log(e.target.innerText);
=======
          <CheckBox
            key={name + Math.random(100)}
            name={name}
            checked={checked}
            handleChange={(e) => {
              setKeyWordsError(false);
>>>>>>> 04c29237b1e587f6b7b13ced0f7b6b5c329ea777
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
