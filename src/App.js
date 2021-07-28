import "./App.css";
import { connect } from "react-redux";
import Dashboard from "./Pages/DashBoard/Dashboard";
import AuthPage from "./Pages/AuthPage/AuthPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import "./MediaQuery/MediaQuery.css";
import PostCard from "./Components/PostCard/PostCard";
import ModalContainer from "./Components/ModalContainer/ModalContainer";
import { useEffect } from 'react';
import Connection from './VideoChat/Connection/Connection';
import TestPage from "./Pages/TestPage/TestPage";

var App = ({ Auth, Profile , Modal }) => {

  return (
    <>
      {Modal ? <ModalContainer/> : null}
      {Auth ? (Profile ? <Dashboard /> : <ProfilePage />) : <AuthPage />}
    </>
  );
};

const mapState = (state) => {
  return {
    Auth: state.Auth,
    Profile: state.Profile,
    Modal : state.Modal
  };
};

export default connect(mapState)(App);
