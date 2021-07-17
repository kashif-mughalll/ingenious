import { combineReducers } from "redux";
import AuthReducer from './Auth/authReducer'
import ProfileReducer from './Profile/ProfileReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const PersistConfig = {
  key : 'root',
  storage,
  whitelist : ['Auth','Profile']
}

var rootReducer = combineReducers({
  Auth : AuthReducer,
  Profile : ProfileReducer,
});

export default persistReducer(PersistConfig,rootReducer)

