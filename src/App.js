import './App.css';
import TestPage from './Pages/TestPage/TestPage';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar';
import { connect } from 'react-redux';
import Dashboard from './Pages/DashBoard/Dashboard';
import AuthPage from './Pages/AuthPage/AuthPage';

var App = ({Auth})=> {
  return (
     false ? <Dashboard/> : <AuthPage/>
  );
}

const mapState = (state) => {
  return {
    Auth : state.Auth
  }
}

export default connect(mapState)(App);
