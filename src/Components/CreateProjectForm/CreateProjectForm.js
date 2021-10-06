import React, { useState, useEffect } from "react";
import "./CreateProjectForm.css";
import TextField from "@material-ui/core/TextField";
import { FormControl, withStyles } from "@material-ui/core";
import { style } from "./CreateProjectForm.style";
import DomainSelector from "../DomainSelector/DomainSelector";
import { connect } from "react-redux";
import CountryRegionSelector from "../CountryRegionSelector/CountryRegionSelector";
import { v4 as Uuid } from "uuid";
import {
  PostMyProject,
  UpdateMyProject,
} from "./../../Redux/PostedProjects/PostedProjectsAction";
import { HideLoader, ShowLoader } from "./../../Redux/Loader/LoaderActions";
import { useHistory } from "react-router-dom";
import { HideModal } from "../../Redux/Modal/ModalActions";

var FilterKeyWorkds = (KeyWords) => {
  var Arr = [];
  Object.entries(KeyWords).forEach(([name, bool]) => {
    if (bool) Arr.push(name);
  });
  return Arr;
};

var CreateProjectForm = ({
  classes,
  auth,
  PostMyProject,
  Data,
  ShowLoader,
  HideLoader,
  UpdateMyProject,
  HideModal,
  defaultKeywords={}
}) => {
  const history = useHistory();
  const {
    id,
    postedAt = "",
    duration = "",
    title = "",
    description = "",
    location = "",
    keywords = [],
  } = Data || {};
  const datesArray = duration.split(" ");

  const [ProjectTitle, setProjectTitle] = useState(title);
  const [ProjectDescription, setProjectDescription] = useState(description);
  const [StartingDate, setStartingDate] = useState(
    datesArray[0] || new Date().toISOString().slice(0, 10)
  );
  const [EndingDate, setEndingDate] = useState(datesArray[2]);
  const [Location, setLocation] = useState(location || "Pakistan");

  const [KeyWords, setKeyWords] = useState(defaultKeywords);
  useEffect(()=>{
    if(keywords.length>0) {
      var selectedKeywords = {};
      console.log(keywords);
      for (let i = 0; i < keywords.length; i++) {
        selectedKeywords[keywords[i]] = true;
      }
      setKeyWords({
        ...KeyWords,
        ...selectedKeywords,
      })
    }
  },[Data])

  // Error States

  const [ProjectTitleError, setProjectTitleError] = useState(false);
  const [ProjectDescriptionError, setProjectDescriptionError] = useState(false);
  const [EndingDateError, setEndingDateError] = useState(false);
  const [KeyWordsError, setKeyWordsError] = useState(false);

  //Validations

  const FormValidation = async () => {
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
      ShowLoader();
      if (Data) {
        Obj.id = id;
        Obj.postedAt = postedAt;
        await UpdateMyProject(Obj);
        await HideModal();
      } else await PostMyProject(Obj);
      HideLoader();
      history.push("/projects/myprojects");
    }
  };
  
  return (
    <div
      className={Data ? classes.modalView + " res-class-3" : classes.container}
    >
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
    picture: state.Profile.picture,
    name: state.Auth.name,
  };
  return {
    auth: auth,
    defaultKeywords : state.Keywords
  };
};

var actions = {
  PostMyProject,
  ShowLoader,
  HideLoader,
  UpdateMyProject,
  HideModal
};

export default connect(mapState, actions)(withStyles(style)(CreateProjectForm));
