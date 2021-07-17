import React, { useState } from "react";
import "./ProfileEditForm.css";
import TextField from "@material-ui/core/TextField";
import { Button, FormControl, withStyles } from "@material-ui/core";
import { style } from "./ProfileEditForm.style";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import DomainSelector from './../DomainSelector/DomainSelector';

var ProfileEditForm = ({
  classes,
  name,
  email,
  phone,
  dob,
  jobTitle,
  about,
  picture
}) => {
  const [FullName, setFullName] = useState(name ? name : "");
  const [Email, setEmail] = useState(email ? email : "");
  const [Phone, setPhone] = useState(phone ? phone : "");
  const [Dob, setDob] = useState(dob ? dob : "1999-11-11");
  const [JobTitle, setJobTitle] = useState(jobTitle ? jobTitle : "");
  const [About, setAbout] = useState(about ? about : "");
  const [KeyWords, setKeyWords] = useState({
    development: false,
    designing: false,
    accounts: false,
    mangement: false,
    aeronotical: false,
    electrical: false,
    mechanical: false,
  });

  return (
    <div className="profile-page-form-container">
      <p className="profile-page-heaing2">Personal Information</p>
      <FormControl fullWidth>
      <TextField
        onChange={(e) => setFullName(e.target.value)}
        InputLabelProps={{ style: { fontSize: "1.5rem" } }}
        fullWidth
        InputProps={{ classes: { input: classes.inputClass } }}
        className={classes.marginClass}
        required
        id="standard-required"
        label="full name"
        value={FullName}
      />
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{ style: { fontSize: "1.5rem" } }}
        fullWidth
        InputProps={{ classes: { input: classes.inputClass } }}
        label="Email"
        value={Email}
        className={classes.marginClass}
        disabled
      />
      <div className="given-margin">
        <MaterialUiPhoneNumber
          onChange={(e) => setPhone(e)}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          defaultCountry={"pk"}
          InputProps={{ classes: { input: classes.inputClass } }}
          // className={classes.marginClass}
          label="Phone number"
          value={Phone}
          fullWidth
        />
      </div>

      <TextField
        onChange={(e) => setDob(e.target.value)}
        InputLabelProps={{ style: { fontSize: "1.5rem" } }}
        fullWidth
        InputProps={{ classes: { input: classes.inputClass } }}
        className={classes.marginClass2}
        id="date"
        label="Date of birth"
        type="date"
        defaultValue={Dob}
        InputLabelProps={{ shrink: true }}
      />
      <p className="profile-page-heaing2">Professional Information</p>
      <TextField
        onChange={(e) => setJobTitle(e.target.value)}
        InputLabelProps={{ style: { fontSize: "1.5rem" } }}
        fullWidth
        InputProps={{ classes: { input: classes.inputClass } }}
        className={classes.marginClass}
        required
        id="standard-required"
        label="Job title"
        value={JobTitle}
      />
      <TextField
        onChange={(e) => setAbout(e.target.value)}
        InputLabelProps={{ style: { fontSize: "1.5rem" } }}
        InputProps={{ classes: { input: classes.lineHeight } }}
        className={classes.marginClass3}
        required
        id="outlined-multiline-static"
        label="About"
        multiline
        rows={7}
        value={About}
        variant="outlined"
        fullWidth
      />
      <p className="profile-page-heaing2">Your Interests</p>
      <DomainSelector keyWords={KeyWords} setKeyWords={setKeyWords} />
      </FormControl>
      <button className="submit-profile-btn">Confirm Edits</button>
    </div>
  );
};

export default withStyles(style)(ProfileEditForm);
