import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assests/LogoOnly.png";
import SerachBarNav from "./SerachBarNav/SerachBarNav";
import NavigationBtn from "./NavigationBtn/NavigationBtn";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

var Navbar = ({picture,location}) => {
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
              <img
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

export default withRouter(connect(mapState)(Navbar));
