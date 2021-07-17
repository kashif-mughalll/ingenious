import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";
import { storage } from "../../Firebase/Firebase-Configuration";

var FirebaseFileUploader = () => {
    
  const UploadStart = (d) => {
    console.log("Starting", d);
  };

  const handleUploadError = (error) => {
    console.error(error);
  };

  const UploadComplete = async (filename) => {
    console.log("complete", filename);
    var url = await storage.child(filename).getDownloadURL();
    console.log(url);
  };

  return (
    <div>
      <FileUploader
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

export default FirebaseFileUploader;
