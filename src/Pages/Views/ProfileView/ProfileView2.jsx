import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import Chips from './../../../Components/Chips/Chips';
import PostCard from './../../../Components/PostCard/PostCard';
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core';
import { useStyles } from './profileView2.style';

var ProfileView = ({profile, classes})=> {
    const {id, name, email, picture, dob, description, contact, keywords} = profile;
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
    return (
        <div className={classes.container}>
            <div className={classes.leftBar}>
                <div data-aos="flip-left" className={classes.avatar} >
                    <img src={picture} alt="Profile Image" />
                </div>
                <div data-aos="fade-right" className={classes.domain} >
                    <p className={classes.domainHeading}><b>Domain</b></p>
                    <div className={classes.domainList}>
                        {keywords.map((feild, index)=>
                            <p data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration={index*150+1200} className={classes.domainItem}>{feild.charAt(0).toUpperCase() + feild.slice(1)}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className={classes.rightBar} >
                <div data-aos="fade-left" className={classes.details}>
                    <p className={classes.name}><b>{name}</b></p>
                    <p className={classes.email}>{email}</p>
                    <p className={classes.contact}><i class="fas fa-phone"></i>{contact}</p>
                    <p className={classes.dob}><i class="far fa-calendar-alt"></i>{dob}</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1500" className={classes.about}>
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ullam eos nulla beatae, tempora necessitatibus distinctio alias esse porro consectetur corrupti quia sapiente earum perferendis aliquam doloribus sunt, itaque voluptatum.
                    </p>
                </div>
                <div className={classes.projects}>
                    <h1 data-aos="fade-left" data-aos-anchor-placement="top-bottom" className={classes.projectHeading}>MY PROJECTS</h1>
                    <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" ><PostCard /></div>
                    <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" ><PostCard /></div>
                    <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" ><PostCard /></div>
                    <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" ><PostCard /></div>
                </div>
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