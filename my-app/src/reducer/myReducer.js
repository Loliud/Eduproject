import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
import chapterReducers from './chapterReducers';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';


const myReducer = combineReducers({
    auth: authReducer,
    chapters: chapterReducers,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});


export default myReducer;