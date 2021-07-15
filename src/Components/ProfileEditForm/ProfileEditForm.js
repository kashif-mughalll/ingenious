import React from "react";
import "./ProfileEditForm.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import { style } from "./ProfileEditForm.style";
import MaterialUiPhoneNumber from "material-ui-phone-number";

var ProfileEditForm = ({ classes }) => {
  return (
    <div className="profile-page-form-container">
      <p className="profile-page-heaing2">Personal Information</p>
      <TextField fullWidth InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass} required id="standard-required" label="full name" value="hello"/>
      <TextField fullWidth InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass} label="Email" value="123@gmail.com" disabled/>
      <MaterialUiPhoneNumber fullWidth defaultCountry={'pk'} InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass} label="Phone number" />
      <TextField fullWidth InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass2} id="date" label="Birthday" type="date" defaultValue="1999-11-11" InputLabelProps={{ shrink: true }}/>
      
      

      
      


      <TextField fullWidth InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass} required id="standard-required" label="Job title" value="Software Eng"/>
      <TextField InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass3} required id="outlined-multiline-static" label="About" multiline rows={8} defaultValue="Default Value" variant="outlined" fullWidth/>
      
    </div>
  );
};

export default withStyles(style)(ProfileEditForm);
