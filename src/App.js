import "./App.css";
import { connect } from "react-redux";
import Dashboard from "./Pages/DashBoard/Dashboard";
import AuthPage from "./Pages/AuthPage/AuthPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import "./MediaQuery/MediaQuery.css";
import ModalContainer from "./Components/ModalContainer/ModalContainer";
import Loader from './Components/LoaderContainer/Loader';

var App = ({ Auth, Profile , Modal ,loader}) => {

  return (
    <>
      {loader ? <Loader/> : null}
      {Modal ? <ModalContainer/> : null}
      {Auth ? (Profile ? <Dashboard /> : <ProfilePage />) : <AuthPage />}
    </>
  );
};

const mapState = (state) => {
  return {
    Auth: state.Auth,
    Profile: state.Profile,
    Modal : state.Modal,
    loader : state.Loader
  };
};

export default connect(mapState)(App);
