import React, { useState, useEffect } from "react";
import "./CreateProjectForm.css";
import TextField from "@material-ui/core/TextField";
import { FormControl, withStyles } from "@material-ui/core";
import { style } from "./CreateProjectForm.style";
import DomainSelector from "../DomainSelector/DomainSelector";
import { connect } from "react-redux";
import CountryRegionSelector from "../CountryRegionSelector/CountryRegionSelector";
import { v4 as Uuid } from "uuid";
import { PostMyProject } from "./../../Redux/PostedProjects/PostedProjectsAction";

var FilterKeyWorkds = (KeyWords) => {
  var Arr = [];
  Object.entries(KeyWords).forEach(([name, bool]) => {
    if (bool) Arr.push(name);
  });
  return Arr;
};

var CreateProjectForm = ({ classes, auth, PostMyProject, Data={} }) => {
  const { postedAt='', duration='', title='', description='', location='', keywords=[]} = Data;
  const datesArray = duration.split(' ');
  console.log(Data);
  const [ProjectTitle, setProjectTitle] = useState(title);
  const [ProjectDescription, setProjectDescription] = useState(description);
  const [StartingDate, setStartingDate] = useState(
    datesArray[0] || new Date().toISOString().slice(0, 10)
  );
  const [EndingDate, setEndingDate] = useState(datesArray[2]);
  const [Location, setLocation] = useState(location || "Pakistan");

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

  const [ProjectTitleError, setProjectTitleError] = useState(false);
  const [ProjectDescriptionError, setProjectDescriptionError] = useState(false);
  const [EndingDateError, setEndingDateError] = useState(false);
  const [KeyWordsError, setKeyWordsError] = useState(false);

  //Validations

  const FormValidation = () => {
    if (ProjectTitle == "" || !ProjectTitle) setProjectTitleError(true);
    else if (ProjectDescription == "" || !ProjectDescription)
      setProjectDescriptionError(true);
    else if (EndingDate == "") setEndingDateError(true);
    else if (FilterKeyWorkds(KeyWords).length == 0) setKeyWordsError(true);
    else {
      var Obj = {
        id: Uuid(),
        postedAt: new Date().toDateString(),
        postedBy: auth,
        title: ProjectTitle,
        description: ProjectDescription,
        keywords: FilterKeyWorkds(KeyWords),
        duration: StartingDate + " To " + EndingDate,
        location: Location,
      };
      PostMyProject(Obj);
    }
  };

  return (
    <div className={classes.container}>
      <FormControl fullWidth>
        <p className="profile-page-heaing2">Project Information</p>
        <TextField
          onChange={(e) => {
            setProjectTitle(e.target.value);
            setProjectTitleError(false);
          }}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          fullWidth
          InputProps={{ classes: { input: classes.inputClass } }}
          className={classes.marginClass}
          id="standard-required"
          label="project title"
          value={ProjectTitle}
          error={ProjectTitleError}
          helperText={ProjectTitleError ? "Title required *" : ""}
        />
        <TextField
          onChange={(e) => {
            setProjectDescription(e.target.value);
            setProjectDescriptionError(false);
          }}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ classes: { input: classes.lineHeight } }}
          className={classes.marginClass3}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={10}
          value={ProjectDescription}
          variant="outlined"
          fullWidth
          error={ProjectDescriptionError}
          helperText={ProjectDescriptionError ? "Description required" : ""}
        />
        <CountryRegionSelector country={Location} setCountry={setLocation} />
        <div className="flex">
          <TextField
            onChange={(e) => {
              setStartingDate(e.target.value);
            }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
            fullWidth
            InputProps={{ classes: { input: classes.inputClass } }}
            className={classes.marginClass22}
            id="date"
            label="Project Starting Date"
            type="date"
            defaultValue={StartingDate}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            onChange={(e) => {
              setEndingDateError(false);
              setEndingDate(e.target.value);
            }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
            fullWidth
            InputProps={{ classes: { input: classes.inputClass } }}
            className={classes.marginClass2}
            id="date"
            label="Expected Ending Date"
            type="date"
            defaultValue={EndingDate}
            InputLabelProps={{ shrink: true }}
            error={EndingDateError}
            helperText={EndingDateError ? "Ending date is required" : ""}
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
      <button className="submit-profile-btn" onClick={FormValidation}>
        Confirm Edits
      </button>
    </div>
  );
};

const mapState = (state) => {
  const auth = {
    id: state.Auth.id,
    picture: state.Auth.picture,
    name: state.Auth.name,
  };
  return {
    auth: auth,
  };
};

var actions = {
  PostMyProject,
};

export default connect(mapState, actions)(withStyles(style)(CreateProjectForm));
