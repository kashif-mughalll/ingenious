import React, { useState } from "react";
import "./ProfilePage.css";
import ProfileEditForm from "../../Components/ProfileEditForm/ProfileEditForm";
import { connect } from "react-redux";
import ProfilePhotoEdit from "../../Components/ProfilePhotoEdit/ProfilePhotoEdit";

var ProfilePage = ({ Auth }) => {
  const [picture, setpicture] = useState(Auth ? Auth.picture : null);

  return (
    <div className="profile-page-container">
      <div className="profile-page-style-div"></div>
      <div className="profile-page-container2">
        <div></div>
        <div className="profile-page-container3">
          <div className="flex2 mov-to-left">
            <ProfilePhotoEdit picture={picture} setPicture={setpicture} />
          </div>
          <ProfileEditForm
            id={Auth ? Auth.id : ""}
            picture={picture}
            name={Auth ? Auth.name : ""}
            email={Auth ? Auth.email : ""}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

var mapState = (state) => {
  return {
    Auth: state.Auth,
  };
};

export default connect(mapState)(ProfilePage);
