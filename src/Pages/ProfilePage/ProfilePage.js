import React from 'react'
import './ProfilePage.css'
import ProfileEditForm from '../../Components/ProfileEditForm/ProfileEditForm'


var ProfilePage = ()=> {
    return (
        <div className="profile-page-container">
            <div className="profile-page-style-div"></div>
            <div>
                my profile
            </div>
            <div className="profile-page-container2">
                <div></div>
                <div className="profile-page-container3">
                    <div className="flex2">
                        <div className="flex1">
                            <div className="profile-picture-cont flex"> <img className="profile-picture" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/> </div>
                            <button className="edit-profile-btn"> <i className="fas fa-user-edit"></i> Edit</button>
                        </div>
                    </div>
                    <ProfileEditForm/>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ProfilePage
