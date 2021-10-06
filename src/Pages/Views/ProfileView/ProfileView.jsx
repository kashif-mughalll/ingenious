import React, { useEffect } from 'react'
import PostCard from '../../../Components/PostCard/PostCard';
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core';
import { useStyles } from './profileView.style';
import { GetMyProjects } from '../../../Redux/PostedProjects/PostedProjectsAction';

var ProfileView = ({profile, classes, myProjects, GetMyProjects})=> {
    const {id, name, email, picture, dob, description, contact, keywords} = profile;
    useEffect(() => {
        GetMyProjects();
      }, []);
    return (
        <div className={classes.container}>
            <div className={classes.leftBar}>
                <div className={classes.avatar} >
                    <img src={picture} alt="Profile Image" />
                </div>
                <div className={classes.domain} >
                    <p className={classes.domainHeading}><b>Domain</b></p>
                    <div className={classes.domainList}>
                        {keywords.map((feild, index)=>
                            <p key={index} className={classes.domainItem}>{feild.charAt(0).toUpperCase() + feild.slice(1)}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className={classes.rightBar} >
                <div className={classes.details}>
                    <p className={classes.name}><b>{name}</b></p>
                    <p className={classes.email}>{email}</p>
                    <p className={classes.contact}><i className="fas fa-phone"></i>{contact}</p>
                    <p className={classes.dob}><i className="far fa-calendar-alt"></i>{dob}</p>
                </div>
                <div className={classes.about}>
                    <h1>About</h1>
                    <p>{description}</p>
                </div>
                <div className={classes.projects + " res-class-6"}>
                    <h1 className={classes.projectHeading}>MY PROJECTS</h1>
                    {myProjects.map( project => <div key={project.id} ><PostCard project={project} editable={true} /></div> )}
                </div>
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        profile : state.Profile,
        myProjects : state.PostedProjects
    }
}

const actions = {
    GetMyProjects
}

export default connect(mapState, actions)(withStyles(useStyles)(ProfileView))
