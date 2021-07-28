import { withStyles } from "@material-ui/core"
import { useState } from "react";
import { connect } from "react-redux"
import { useStyles } from "./projectDetailsForm.style"
import DomainSelector from "../DomainSelector/DomainSelector";

const ProjectDetailsForm = ({classes, projects,Data}) => {
    console.log(Data);
    const {postedBy, postedAt, duration, title, description, location, keywords} = projects[0];
    let myObj = {};
    for (let i=0 ; i<keywords.length ; i++){
        myObj[keywords[i]] = false;
    }
    const [domain, setDomain] = useState(myObj);
    const [display, setDisplay] = useState(false);
    const [KeyWordsError, setKeyWordsError] = useState(false);

    return(
        <div className={classes.container}>
            <div className={classes.authDescription}>
                <div className={classes.avatar}>
                    <img src={postedBy.picture} alt="Author Image" />
                </div>
                <div className={classes.authName}>{postedBy.name}</div>
            </div>
            <div className={classes.projectName}>{title}</div>
            <div className={classes.dates}>
                <div className={classes.postedAt}><b>Posted At:</b>{postedAt}</div>
                <div className={classes.duration}><b>Project Duration:</b>{duration}</div>
                <div className={classes.location}><b>Location:</b>{location}</div>
            </div>
            <div className={classes.description}>
                <b>Description</b>
                <div>{description}</div>
            </div>
            {
                !display ?
                    <div className={classes.colButton}>
                        <button className={classes.button} onClick={()=>setDisplay(!display)}>
                            Collaborate
                        </button>
                    </div>
                :
                <>
                    <div className={classes.domain}>
                        <b>Domain</b>
                        <p>Select the feild in which you want to provide your services</p>
                        <DomainSelector keyWords={domain} setKeyWords={setDomain} setKeyWordsError={setKeyWordsError}/>
                    </div>
                    <div className={classes.reqButton}>
                        <button className={classes.button}>
                            Request for Collaboraation
                        </button>
                    </div>
                </>
            }
        </div>
    )
}
const mapStates = (state) => {
    return {
        projects: state.PostedProjects
    }
}
export default connect(mapStates)(withStyles(useStyles)(ProjectDetailsForm))