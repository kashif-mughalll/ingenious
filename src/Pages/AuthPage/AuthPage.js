import React,{useState} from 'react'
import'./AuthPage.css'
import { connect } from 'react-redux';
import { SignInWithGoogle } from './../../Redux/Auth/authActions';
import AuthImage from '../../Assests/Authpic2.png'


var AuthPage = ({Auth,SignInWithGoogle})=> {
    const [ToogleForms, setToogleForms] = useState(false);

    let ToogleFormsFunc = ()=> {
        setToogleForms(!ToogleForms);
    }
    
    return (
        <div className="auth-page">            
            <div className="auth-page-cartoon-div flex">
                <img src={AuthImage} alt="" className="auth-page-cartoon-img" />
            </div>

            <div className="auth-page-form">
                {
                    ToogleForms ? <div>Form1</div> : <div>Form2</div>
                }
            </div>
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
