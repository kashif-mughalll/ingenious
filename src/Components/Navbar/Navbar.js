import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assests/LogoOnly.png";
import SerachBarNav from "./SerachBarNav/SerachBarNav";
import NavigationBtn from "./NavigationBtn/NavigationBtn";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {CallUser}from '../../Redux/IncomingCall/IncomingCallActions'

var Navbar = ({picture,location,CallUser}) => {
  var token = String(location.pathname).split('/');
  const [state, setState] = useState(token[1] ? token[1] : 'home');

  return (
    <div className="navbar">
      <div></div>
      <div className="navbar-center">
        <div className="navbar-center-left">
          <img className="navbar-logo" src={Logo} alt="" />
          <SerachBarNav />
        </div>
        <div className="navbar-center-right">
          <div className="navbar-center-right-div">
            <NavigationBtn
              state={state}
              setState={setState}
              iconClass="fas fa-home"
              name="home"
              link="/"
            />
            <NavigationBtn
              state={state}
              setState={setState}
              iconClass="fas fa-desktop"
              name="projects"
              link="/projects/myprojects"
            />
            <NavigationBtn
              state={state}
              setState={setState}
              iconClass="fas fa-bell"
              name="notification"
              link="/notification"
            />
            <NavigationBtn
              state={state}
              setState={setState}
              iconClass="fas fa-id-card"
              name="profile"
              link="/myprofile"
            />
            <NavigationBtn
              state={state}
              setState={setState}
              iconClass="fas fa-cogs"
              name="setting"
              link="/setting"
            />
          </div>
          <div className="flex-around">
            <div className="nav-pic-cont">
              <img onClick={()=> CallUser({
                 initiator: true,
                 caller: {
                   id: "w2ydAVYwXefQ68LXlugmDPy4S4I3",
                   name: "kashif mughal",
                   picture:
                     "https://firebasestorage.googleapis.com/v0/b/ingenious-ecd53.appspot.com/o/images%2Fef2989e3-1587-4302-b9ef-bef8bfe98764.JPG?alt=media&token=fdb3363e-7d91-411a-8853-c21d2fff7816",
                 },
                 to: "0NYFblgI7UTtD95CEOaBku2YjUi2",
              })}
                className="navbar-picture"
                src={
                  picture
                    ? picture
                    : "https://static.vecteezy.com/system/resources/previews/002/534/006/non_2x/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                }
                alt=""
              />
            </div>
            <i className="fas fa-caret-down caret-style"></i>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const mapState = (state) => {
  return {
    picture: state.Profile.picture,
  };
};

const actions = {
  CallUser
}

export default withRouter(connect(mapState,actions)(Navbar));
