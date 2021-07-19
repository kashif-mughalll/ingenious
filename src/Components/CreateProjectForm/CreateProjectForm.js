import React, { useState } from "react";
import "./CreateProjectForm.css";
import TextField from "@material-ui/core/TextField";
import { FormControl, withStyles } from "@material-ui/core";
import { style } from "./CreateProjectForm.style";
import DomainSelector from "../DomainSelector/DomainSelector";
import { connect } from "react-redux";

var FilterKeyWorkds = (KeyWords) => {
  var Arr = [];
  Object.entries(KeyWords).forEach(([name, bool]) => {
    if (bool) Arr.push(name);
  });
  return Arr;
};

var CreateProjectForm = ({ classes }) => {
  const [ProjectTitle, setProjectTitle] = useState("");
  const [ProjectDescription, setProjectDescription] = useState("");

  const [KeyWords, setKeyWords] = useState({
    development: false,
    designing: false,
    accounts: false,
    mangement: false,
    aeronotical: false,
    electrical: false,
    mechanical: false,
    feild1: false,
    feild2: false,
    feild3: false,
    feild4: false,
    feild5: false,
    feild6: false,
  });

  // Error States
  const [NameError, setNameError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const [DobError, setDobError] = useState(false);
  const [JobTitleError, setJobTitleError] = useState(false);
  const [KeyWordsError, setKeyWordsError] = useState(false);

  //Validations

  //   const FormValidation = () => {
  //     if (FullName == "" || !FullName) setNameError(true)
  //     else if (String(Phone).length != 15) setPhoneError(true)
  //     else if (Dob == "") setDobError(true)
  //     else if (JobTitle == "" || !JobTitle) setJobTitleError(true)
  //     else if (FilterKeyWorkds(KeyWords).length == 0) setKeyWordsError(true)
  //     else if (
  //       !NameError &&
  //       !KeyWordsError &&
  //       !JobTitleError &&
  //       !DobError &&
  //       !PhoneError
  //     ) {
  //       var profile = {
  //         keywords: FilterKeyWorkds(KeyWords),
  //         contact: Phone,
  //         description: About,
  //         title: JobTitle,
  //         dob: Dob,
  //         name: FullName,
  //         email,
  //         Email,
  //         picture: picture,
  //         id: id,
  //       };
  //     //   SetProfile(profile);
  //     }
  //   };

  return (
    <div className={classes.container1}>
      <FormControl fullWidth>
        <p className="profile-page-heaing2">Project Information</p>
        <TextField
          onChange={(e) => {
            setJobTitleError(false);
            setProjectTitle(e.target.value);
          }}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          fullWidth
          InputProps={{ classes: { input: classes.inputClass } }}
          className={classes.marginClass}
          id="standard-required"
          label="project title"
          value={ProjectTitle}
          error={JobTitleError}
          helperText={JobTitleError ? "Title required *" : ""}
        />
        <TextField
          onChange={(e) => setProjectDescription(e.target.value)}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ classes: { input: classes.lineHeight } }}
          className={classes.marginClass3}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={9}
          value={ProjectDescription}
          variant="outlined"
          fullWidth
        />

        <div className="flex">
          <TextField
            onChange={(e) => {
              setDobError(false);
              //   setDob(e.target.value);
            }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
            fullWidth
            InputProps={{ classes: { input: classes.inputClass } }}
            className={classes.marginClass22}
            id="date"
            label="Date of birth"
            type="date"
            defaultValue={""}
            InputLabelProps={{ shrink: true }}
            error={DobError}
            helperText={DobError ? "Select birth date" : ""}
          />
          <TextField
            onChange={(e) => {
              setDobError(false);
              //   setDob(e.target.value);
            }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
            fullWidth
            InputProps={{ classes: { input: classes.inputClass } }}
            className={classes.marginClass2}
            id="date"
            label="Date of birth"
            type="date"
            defaultValue={""}
            InputLabelProps={{ shrink: true }}
            error={DobError}
            helperText={DobError ? "Select birth date" : ""}
          />
        </div>

        <p className="profile-page-heaing2">Select Project Requirments</p>
        <DomainSelector
          setKeyWordsError={setKeyWordsError}
          keyWords={KeyWords}
          setKeyWords={setKeyWords}
        />
        {KeyWordsError ? (
          <p className="error-21">Please select alteast one</p>
        ) : null}
      </FormControl>
      <button className="submit-profile-btn" onClick={"FormValidation"}>
        Confirm Edits
      </button>
    </div>
  );
};

var actions = {};

export default connect(null, actions)(withStyles(style)(CreateProjectForm));
