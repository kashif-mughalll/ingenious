import { combineReducers } from "redux";
import AuthReducer from './Auth/authReducer'
import ProfileReducer from './Profile/ProfileReducer'

var rootReducer = combineReducers({
  Auth : AuthReducer,
  Profile : ProfileReducer,
});

export default rootReducer

