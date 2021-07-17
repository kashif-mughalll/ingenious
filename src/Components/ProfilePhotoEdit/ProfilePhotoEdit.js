import React, { useRef } from "react";
import { storage } from "../../Firebase/Firebase-Configuration";
import FileUploader from "react-firebase-file-uploader";

var ProfilePhotoEdit = ({ picture, setPicture }) => {
  const DivRef = useRef(null);

  const UploadStart = (pictureInfo) => {
    DivRef.current.style.display = 'flex';
  };

  const handleUploadError = (error) => {
    console.error(error);
  };

  const UploadComplete = async (filename) => {
    var url = await storage.child(filename).getDownloadURL();
    setPicture(url);
    setTimeout(() => {
        DivRef.current.style.display = 'none';
    }, 1000);
  };

  return (
    <div className="flex1">
      <div className="profile-picture-cont flex">
        <div ref={DivRef} className="loader-cont flex"><div className="loader-itself"></div></div>
        <img
          className="profile-picture"
          src={
            picture
              ? picture
              : "https://static.vecteezy.com/system/resources/previews/002/534/006/non_2x/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
          }
          alt=""
        />
      </div>
      <FileUploader
        className="custom-file-input"
        accept="image/*"
        name="avatar"
        randomizeFilename
        storageRef={storage}
        onUploadStart={UploadStart}
        onUploadError={handleUploadError}
        onUploadSuccess={UploadComplete}
      />
    </div>
  );
};

export default ProfilePhotoEdit;
