import { combineReducers } from 'redux';
import reduxAutobahn from 'redux-autobahn-js';
import MainApp from '../components/MainApp/reducers/reducer';

export default combineReducers({
    autobahn: reduxAutobahn.reducer,
    MainApp: MainApp,
});
