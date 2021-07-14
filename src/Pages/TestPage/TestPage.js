import React from 'react'
import { connect } from 'react-redux';
import { LogOut, SignInWithGoogle } from './../../Redux/Auth/authActions';
import { SetProfile } from './../../Redux/Profile/ProfileAcions';


var TestPage = ({SignInWithGoogle,Auth,SetProfile,LogOut})=> {

    
    var profile = {
        country : "pakistan",
        keywords : ["key1","key2"],
        contact : "0333321322",
        description : "hello this is my profile this and that etc",
        title : "Web Developer",
        ...Auth
    }

    console.log(profile)
    return (
        <div style={{display:'flex',flexFlow:'column'}}>
            <button
                onClick={()=> SignInWithGoogle()}
            >google sign in</button>

            <button
                onClick={()=> SetProfile(profile)}
            >update profile</button>

            <button
                onClick={()=> LogOut()}
            >logout</button>
        </div>
    )
}

var actions = {
    SignInWithGoogle,
    SetProfile,
    LogOut
}

var mapState = (state)=>{
    return ({
        Auth : state.Auth
    })
}


export default connect(mapState,actions)(TestPage)
