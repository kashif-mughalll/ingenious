import React from 'react'
import './ProfilePage.css'
import ProfileEditForm from '../../Components/ProfileEditForm/ProfileEditForm'
import { connect } from 'react-redux';


var ProfilePage = ({Auth})=> {
    return (
        <div className="profile-page-container">
            <div className="profile-page-style-div"></div>
            <div className="profile-page-container2">
                <div></div>
                <div className="profile-page-container3">
                    <div className="flex2">
                        <div className="flex1">
                            <div className="profile-picture-cont flex"> <img className="profile-picture" src={Auth ? Auth.picture : 'https://static.vecteezy.com/system/resources/previews/002/534/006/non_2x/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg'} alt=""/> </div>
                            <button className="edit-profile-btn"> <i className="fas fa-user-edit"></i> Edit</button>
                        </div>
                    </div>
                    <ProfileEditForm id={Auth ? Auth.id : ''} picture={Auth ? Auth.picture : null} name={Auth ? Auth.name : ''} email={Auth ? Auth.email : ''}/>
                </div>
                <div></div>
            </div>
        </div>
    )
}

var mapState = (state)=> {
    return {
        Auth : state.Auth
    }
}

export default connect(mapState)(ProfilePage)
