import React, { useState } from "react";
import "./ProfileEditForm.css";
import TextField from "@material-ui/core/TextField";
import { FormControl, withStyles } from "@material-ui/core";
import { style } from "./ProfileEditForm.style";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import DomainSelector from "./../DomainSelector/DomainSelector";
import { SetProfile } from "../../Redux/Profile/ProfileAcions";
import { connect } from "react-redux";
import { HideLoader, ShowLoader } from './../../Redux/Loader/LoaderActions';
import { useEffect } from "react";

var FilterKeyWorkds = (KeyWords) => {
  var Arr = [];
  Object.entries(KeyWords).forEach(([name, bool]) => {
    if (bool) Arr.push(name);
  });
  return Arr;
};
function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

var ProfileEditForm = ({
  SetProfile,
  classes,
  name,
  email,
  phone,
  dob,
  jobTitle,
  about,
  picture,
  id,
  ShowLoader,
  HideLoader,
  defaultKeywords
}) => {
  const [FullName, setFullName] = useState(name ? name : "");
  const [Email, setEmail] = useState(email ? email : "");
  const [Phone, setPhone] = useState(phone ? phone : "");
  const [Dob, setDob] = useState(dob ? dob : "");
  const [JobTitle, setJobTitle] = useState(jobTitle ? jobTitle : "");
  const [About, setAbout] = useState(about ? about : "");
  const [KeyWords, setKeyWords] = useState(defaultKeywords);

  useEffect(()=>{
    setKeyWords(defaultKeywords)
  },[defaultKeywords])

  // Error States
  const [NameError, setNameError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const [DobError, setDobError] = useState(false);
  const [JobTitleError, setJobTitleError] = useState(false);
  const [KeyWordsError, setKeyWordsError] = useState(false);

  //Validations

  const FormValidation = async () => {
    if (FullName == "" || !FullName) setNameError(true)
    else if (String(Phone).length != 15) setPhoneError(true)
    else if (Dob == "") setDobError(true)
    else if (JobTitle == "" || !JobTitle) setJobTitleError(true)
    else if (FilterKeyWorkds(KeyWords).length == 0) setKeyWordsError(true)
    else if (
      !NameError &&
      !KeyWordsError &&
      !JobTitleError &&
      !DobError &&
      !PhoneError
    ) {
      ShowLoader()
      var profile = {
        keywords: FilterKeyWorkds(KeyWords),
        contact: Phone,
        description: About,
        title: JobTitle,
        dob: Dob,
        name: titleCase(FullName),
        email,
        Email,
        picture: picture,
        id: id,
      };
      await SetProfile(profile);
      HideLoader();
    }
  };

  return (
    <div className="profile-page-form-container">
      <p className="profile-page-heaing2">Personal Information</p>
      <FormControl fullWidth>
        <TextField
          onChange={(e) => {
            setFullName(e.target.value);
            setNameError(false);
          }}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          fullWidth
          InputProps={{ classes: { input: classes.inputClass } }}
          className={classes.marginClass}
          required
          id="standard-required"
          label="full name"
          value={FullName}
          error={NameError}
          helperText={NameError ? "Enter a valid name" : ""}
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
            onChange={(e) => {
              setPhoneError(false);
              setPhone(e);
            }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
            defaultCountry={"pk"}
            InputProps={{ classes: { input: classes.inputClass } }}
            label="Phone number"
            value={Phone}
            fullWidth
            error={PhoneError}
            helperText={PhoneError ? "Enter a valid phone number" : ""}
          />
        </div>

        <TextField
          onChange={(e) => {
            setDobError(false);
            setDob(e.target.value);
          }}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          fullWidth
          InputProps={{ classes: { input: classes.inputClass } }}
          className={classes.marginClass2}
          id="date"
          label="Date of birth"
          type="date"
          defaultValue={Dob}
          InputLabelProps={{ shrink: true }}
          error={DobError}
          helperText={DobError ? "Select birth date" : ""}
        />
        <p className="profile-page-heaing2">Professional Information</p>
        <TextField
          onChange={(e) => {
            setJobTitleError(false);
            setJobTitle(e.target.value);
          }}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          fullWidth
          InputProps={{ classes: { input: classes.inputClass } }}
          className={classes.marginClass}
          required
          id="standard-required"
          label="Job title"
          value={JobTitle}
          error={JobTitleError}
          helperText={JobTitleError ? "Title required *" : ""}
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
          rows={8}
          value={About}
          variant="outlined"
          fullWidth
        />
        <p className="profile-page-heaing2">Your Interests</p>
        <DomainSelector
          KeyWordsError={KeyWordsError}
          setKeyWordsError={setKeyWordsError}
          keyWords={KeyWords}
          setKeyWords={setKeyWords}
        />
        {KeyWordsError ? (
          <p className="error-21">Please select alteast one</p>
        ) : null}
      </FormControl>
      <button className="submit-profile-btn" onClick={FormValidation}>
        Confirm Edits
      </button>
    </div>
  );
};

const mapState = state => ({
  defaultKeywords: state.Keywords
})

var actions = {
  SetProfile,
  ShowLoader,
  HideLoader
};

export default connect(mapState, actions)(withStyles(style)(ProfileEditForm));
