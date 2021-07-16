import {
  withStyles,
  FormControl,
} from "@material-ui/core";
import { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import { useStyles } from "../Test/domainSelector.style";

const DomainSelector = ({ classes }) => {
  const [data, setData] = useState({
    dev: false,
    des: false,
    acc: false,
    mang: false,
    ceo: false,
    elect: false,
    mech: false,
  });
  let temp = Object.entries(data);
  return (
    <div className={classes.container}>
      <FormControl className={classes.checkGroup} component="fieldset">
        {temp.map(([name, checked]) => (
          <CheckBox
            name={name}
            checked={checked}
            handleChange={(e) => {
              setData({
                ...data,
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
