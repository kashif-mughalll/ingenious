import './NotificationView.css'
import NotificationCard from './../../../Components/NotificationCard/NotificationCard';

var NotificationView = ({})=> {
    return (
        <div className="notification-view-cont">
            <h1 className='notification-view-heading'>Notifications</h1>
            <NotificationCard />
        </div>
    )
}

export default NotificationView
