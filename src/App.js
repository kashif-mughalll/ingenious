import "./App.css";
import { connect } from "react-redux";
import Dashboard from "./Pages/DashBoard/Dashboard";
import AuthPage from "./Pages/AuthPage/AuthPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ModalContainer from "./Components/ModalContainer/ModalContainer";
import Loader from './Components/LoaderContainer/Loader';
import "./MediaQuery/MediaQuery.css";
import { useEffect } from "react";
import { GetKeywords } from "./Redux/Keywords/KeywordsActions";

var App = ({ Auth, Profile , Modal ,loader,GetKeywords}) => {

  useEffect(()=>{
    GetKeywords()
  },[])

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

const actions = {
  GetKeywords
}

export default connect(mapState,actions)(App);
