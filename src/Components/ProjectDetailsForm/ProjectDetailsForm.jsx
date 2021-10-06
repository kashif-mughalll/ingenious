import { withStyles } from "@material-ui/core";
import { useState } from "react";
import { useStyles } from "./projectDetailsForm.style";
import DomainSelector from "../DomainSelector/DomainSelector";
import { connect } from "react-redux";
import { CreateCollaborationRequest } from "./../../Redux/Requests/RequestsActions";
import { v4 as Uuid } from "uuid";
import { HideModal } from "../../Redux/Modal/ModalActions";
import Collaborator from "../Collaborators/Collaborator";
import { HideLoader, ShowLoader } from './../../Redux/Loader/LoaderActions';

const ProjectDetailsForm = ({
  classes,
  Data,
  myInfo,
  CreateCollaborationRequest,
  HideModal,
  HideLoader,
  ShowLoader
}) => {
  const {
    postedBy,
    postedAt,
    duration,
    title,
    description,
    location,
    keywords,
    id,
    collaborators
  } = Data;
  let myObj = {};
  for (let i = 0; i < keywords.length; i++) {
    myObj[keywords[i]] = false;
  }
  const [domain, setDomain] = useState(myObj);
  const [display, setDisplay] = useState(false);
  const [KeyWordsError, setKeyWordsError] = useState(false);

  return (
    <div className={classes.container + " res-class-2"}>
      <div className={classes.authDescription}>
        <div className={classes.avatar}>
          <img src={postedBy.picture} alt="Author Image" />
        </div>
        <div className={classes.authName}>{postedBy.name}</div>
      </div>
      <div className={classes.projectName}>{title}</div>
      <div className={classes.dates}>
        <div className={classes.postedAt}>
          <b>Posted At:</b>
          {postedAt}
        </div>
        <div className={classes.duration}>
          <b>Project Duration:</b>
          {duration}
        </div>
        <div className={classes.location}>
          <b>Location:</b>
          {location}
        </div>
      </div>
      <div className={classes.description}>
        <b>Description</b>
        <div>{description}</div>
      </div>
      <div className={classes.collaborators}>
        {
          collaborators ? collaborators.map( person => <Collaborator key={person.id} person={person} />) : null
        }
      </div>
      {!display ? (
        <div className={classes.colButton}>
          <button
            className={classes.button}
            onClick={() => setDisplay(!display)}
          >
            Collaborate
          </button>
        </div>
      ) : (
        <>
          <div className={classes.domain}>
            <b>Domain</b>
            <p>Select the feild in which you want to provide your services</p>
            <DomainSelector
              keyWords={domain}
              setKeyWords={setDomain}
              setKeyWordsError={setKeyWordsError}
            />
            {KeyWordsError ? <p className={classes.errorClass}>Select atleat one domain</p> : ''}
          </div>
          <div className={classes.reqButton}>
            <button
              className={classes.button}
              onClick={async () => {
                if (FilterKeyWorkds(domain).length != 0) {
                  ShowLoader()
                  var Obj = {
                    id: postedBy.id,
                    keywords: FilterKeyWorkds(domain),
                    title,
                    pid: id,
                    info: myInfo,
                    rid: Uuid(),
                  };
                  await CreateCollaborationRequest(Obj);
                  HideModal();
                  HideLoader();
                } else setKeyWordsError(true);
              }}
            >
              Request for Collaboraation
            </button>
          </div>
        </>
      )}
    </div>
  );
};

var mapState = (state) => {
  return {
    myInfo: {
      name: state.Auth.name,
      id: state.Auth.id,
      picture: state.Auth.picture,
    },
  };
};

const actions = {
  CreateCollaborationRequest,
  HideModal,
  ShowLoader,
  HideLoader
};

export default withStyles(useStyles)(
  connect(mapState, actions)(ProjectDetailsForm)
);

var FilterKeyWorkds = (KeyWords) => {
  var Arr = [];
  Object.entries(KeyWords).forEach(([name, bool]) => {
    if (bool) Arr.push(name);
  });
  return Arr;
};
