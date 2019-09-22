import axios from 'axios';
import *as types from '../constants/types';
export const fetchChapter = () =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        axios.get('https://5d3029eb28465b00146aaca5.mockapi.io/api/chapterEdu')
        .then(res =>{
            console.log(res.data);
            const firestore = getFirestore();
            firestore.collection('appUsers').add({
                email: 'Kenadni@gmail.com',
                name: 'Xong',
                password: 'xaolong',
                done: [],
                inventory: []
            });
            dispatch({type: types.GET_CHAPTERS, chapters: res.data});
        });
    }
}


export const signIn = (credentials) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(() =>{
            dispatch({type: types.LOGIN_SUCCESS});
        })
        .catch(() =>{
            dispatch({type: types.LOGIN_FAILED});
        });
    }
}