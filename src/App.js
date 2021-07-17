import './App.css';
import { connect } from 'react-redux';
import Dashboard from './Pages/DashBoard/Dashboard';
import AuthPage from './Pages/AuthPage/AuthPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import './MediaQuery/MediaQuery.css'

var App = ({Auth,Profile})=> {
  return (
    Auth ? (Profile ? <Dashboard/> : <ProfilePage/>) : <AuthPage/>
  );
}

const mapState = (state) => {
  return {
    Auth : state.Auth,
    Profile : state.Profile
  }
}

export default connect(mapState)(App);
