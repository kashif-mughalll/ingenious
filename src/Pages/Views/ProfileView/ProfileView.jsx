import React from 'react'
import Chips from './../../../Components/Chips/Chips';
import PostCard from './../../../Components/PostCard/PostCard';
import Page2 from './ProfileView2';
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core';
import { useStyles } from './profileView.style';

var ProfileView = ({profile, classes})=> {
    console.log(profile);
    const {id, name, email, picture, dob, description, contact, keywords} = profile
    return (
        <div className={classes.container}>
            <div className={classes.basic}>
                <div className={classes.avatar}>
                    <img src={picture} alt="Profile Image" />
                </div>
                <div className={classes.details}>
                    <div className={classes.name}><b>Name: </b>{name}</div>
                    <div className={classes.email}>{email}</div>
                    <div className={classes.contact}><b>Contact: </b>{contact}</div>
                    <div className={classes.dob}><b>Date of Birth: </b>{dob}</div>
                    <div className={classes.description}>
                        <b>Description: </b>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ullam eos nulla beatae, tempora necessitatibus distinctio alias esse porro consectetur corrupti quia sapiente earum perferendis aliquam doloribus sunt, itaque voluptatum.
                        </p>
                    </div>
                    <div className={classes.domain}>
                        <b>Domains: </b>
                        <div className={classes.projectDomain}>
                            {keywords.map((name)=><Chips name={name} />)}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.myProjects}>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <Page2 />
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        profile : state.Profile
    }
}

export default connect(mapState)(withStyles(useStyles)(ProfileView))
