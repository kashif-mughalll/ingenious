import React from 'react'
import'./AuthPage.css'
import { connect } from 'react-redux';
import { SignInWithGoogle } from './../../Redux/Auth/authActions';
import LoginForm from './../../Components/LoginForm/LoginForm'
import SignUpForm from './../../Components/SignUpForm/SignUpForm';


var AuthPage = ({Auth,SignInWithGoogle})=> {

    
    return (
        <div className="auth-page">
            <SignUpForm/>
        </div>
    )
}




const mapState = (state)=>{
    return {
        Auth : state.Auth
    }
}

const actions = {
    SignInWithGoogle,
}

export default connect(mapState,actions)(AuthPage)
