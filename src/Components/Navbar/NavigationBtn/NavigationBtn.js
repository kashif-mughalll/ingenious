import React from "react";
import "./NavigationBtn.css";
import { Link } from "react-router-dom";

var NavigationBtn = ({ iconClass, state, setState, name,link }) => {
  var classes = iconClass + " navigationbttn";
  if (state === name) classes += " bordered-navigation";
  return (
    <Link to={link}>
      <div className="navigation-btn-cont" onClick={() => setState(name)}>
        <i className={classes}></i>
      </div>
    </Link>
  );
};

export default NavigationBtn;
