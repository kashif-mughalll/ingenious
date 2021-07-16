import React, { useState } from "react";
import "./AuthPage.css";
import { connect } from "react-redux";
import { SignInWithGoogle } from "./../../Redux/Auth/authActions";
import AuthImage from "../../Assests/Authpic2.png";
import LoginForm from "../../Components/LoginForm/LoginForm";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import Logo from '../../Assests/Logo.png'
import Footer from '../../Components/Footer/Footer'

var AuthPage = ({ Auth, SignInWithGoogle }) => {
  const [ToogleForms, setToogleForms] = useState(true);

  let ToogleFormsFunc = () => {
    setToogleForms(!ToogleForms);
  };

  return (
    <>
    <div className="set-auth-width">
      <div className="auth-page-top">
        <img className="Logo-auth-page" src={Logo} alt=""/>
      </div>
      <div className="auth-page">
        <div className="auth-page-cartoon-div flex">
          <img src={AuthImage} alt="" className="auth-page-cartoon-img" />
        </div>
        <div className="cover-width-100">
          <div className="auth-page-form">
            {ToogleForms ? (
              <LoginForm toggleHandler={ToogleFormsFunc} />
            ) : (
              <SignUpForm toggleHandler={ToogleFormsFunc} />
            )}
          </div>
        </div>
      </div>
      <div className="auth-free-space"></div>      
    </div>
    <br></br>
    <Footer/>
    </>
  );
};

const mapState = (state) => {
  return {
    Auth: state.Auth,
  };
};

const actions = {
  SignInWithGoogle,
};

export default connect(mapState, actions)(AuthPage);
