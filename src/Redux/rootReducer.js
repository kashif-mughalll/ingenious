import { combineReducers } from "redux";
import AuthReducer from './Auth/authReducer'
import ProfileReducer from './Profile/ProfileReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import PostedProjectsReducer from './PostedProjects/PostedProjectsReducer';
import ModalReducer from './Modal/ModalReducer';


const PersistConfig = {
  key : 'root',
  storage,
  whitelist : ['Auth','Profile']
}

var rootReducer = combineReducers({
  Auth : AuthReducer,
  Profile : ProfileReducer,
  PostedProjects : PostedProjectsReducer,
  Modal : ModalReducer
});

export default persistReducer(PersistConfig,rootReducer)

