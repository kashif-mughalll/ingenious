import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assests/LogoOnly.png";
import SerachBarNav from "./SerachBarNav/SerachBarNav";
import NavigationBtn from "./NavigationBtn/NavigationBtn";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {CallUser}from '../../Redux/IncomingCall/IncomingCallActions'
import LogOutButton from "../LogOutButton/LogOutButton";

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
              name="myprofile"
              link="/myprofile"
            />
            <NavigationBtn
              state={state}
              setState={setState}
              iconClass="fas fa-cogs"
              name="setting"
              link="/setting"
            />
            <LogOutButton picture={picture} />  
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
