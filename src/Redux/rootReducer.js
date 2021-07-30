import { combineReducers } from "redux";
import AuthReducer from './Auth/authReducer'
import ProfileReducer from './Profile/ProfileReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import PostedProjectsReducer from './PostedProjects/PostedProjectsReducer';
import ModalReducer from './Modal/ModalReducer';
import RequestsReducer from './Requests/RequestsReducer';
import SocketReducer from './Socket/SocketReducer';
import IncomingCallReducer from './IncomingCall/IncomingCallReducer';
import ProjectsReducer from './Projects/ProjectsReducer';
import LoaderReducer from './Loader/LoaderReducer';
import CollaborationsReducer from './Collaborations/CollaborationsReducer';
import KeywordsReducer from './Keywords/KeywordsReducer';


const PersistConfig = {
  key : 'root',
  storage,
  whitelist : ['Auth','Profile']
}

var rootReducer = combineReducers({
  Auth : AuthReducer,
  Profile : ProfileReducer,
  PostedProjects : PostedProjectsReducer,
  Requests : RequestsReducer,
  Modal : ModalReducer,
  Socket : SocketReducer,
  IncomingCall : IncomingCallReducer,
  Projects : ProjectsReducer,
  Loader : LoaderReducer,
  Collaborations : CollaborationsReducer,
  Keywords : KeywordsReducer
});

export default persistReducer(PersistConfig,rootReducer)

