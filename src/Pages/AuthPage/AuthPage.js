import React from 'react'
import'./AuthPage.css'
import { connect } from 'react-redux';
import { SignInWithGoogle } from './../../Redux/Auth/authActions';


var AuthPage = ({Auth,SignInWithGoogle})=> {

    
    return (
        <div className="auth-page">
            
            AuthPage



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
