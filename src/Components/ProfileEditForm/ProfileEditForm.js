import React,{useState} from "react";
import "./ProfileEditForm.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import { style } from "./ProfileEditForm.style";
import MaterialUiPhoneNumber from "material-ui-phone-number";

var ProfileEditForm = ({ classes , name , email , phone , dob , jobTitle , about}) => {

  const [FullName, setFullName] = useState(name ? name : '');
  const [Email, setEmail] = useState(email ? email : '');
  const [Phone, setPhone] = useState(phone ? phone : '');
  const [Dob, setDob] = useState(dob ? dob : '1999-11-11');
  const [JobTitle, setJobTitle] = useState(jobTitle ? jobTitle : '');
  const [About, setAbout] = useState(about ? about : '');

  return (
    <div className="profile-page-form-container">
      <p className="profile-page-heaing2">Personal Information</p>
      <TextField InputLabelProps={{style: {fontSize: "1.5rem"}}} fullWidth InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass} required id="standard-required" label="full name" value="hello"/>
      <TextField InputLabelProps={{style: {fontSize: "1.5rem"}}} fullWidth InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass} label="Email" value="123@gmail.com" disabled/>
      <MaterialUiPhoneNumber InputLabelProps={{style: {fontSize: "1.5rem"}}} fullWidth defaultCountry={'pk'} InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass} label="Phone number" />
      <TextField InputLabelProps={{style: {fontSize: "1.5rem"}}} fullWidth InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass2} id="date" label="Date of birth" type="date" defaultValue="1999-11-11" InputLabelProps={{ shrink: true }}/>
      <TextField InputLabelProps={{style: {fontSize: "1.5rem"}}} fullWidth InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass} required id="standard-required" label="Job title" value="Software Eng"/>
      <TextField InputLabelProps={{style: {fontSize: "1.5rem"}}} InputProps={{ classes: { input: classes.inputClass } }} className={classes.marginClass3} required id="outlined-multiline-static" label="About"  multiline rows={8} defaultValue="Default Value" variant="outlined" fullWidth/>
    </div>
  );
};

export default withStyles(style)(ProfileEditForm);
