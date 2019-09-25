import axios from 'axios';
import *as types from '../constants/types';
export const fetchChapter = () =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        axios.get('https://5d3029eb28465b00146aaca5.mockapi.io/api/chapterEdu')
        .then(res =>{
            // console.log(res.data);
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

export const signUp = (newUser) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) =>{
            return firestore.collection('appUsers').doc(res.user.uid).set({
                name: newUser.name,
                avar: newUser.name[0]
            });
        }).then(() =>{
            dispatch({type: types.SIGN_SUCCESS});
        })
        .catch(err =>{
            dispatch({type: types.SIGN_UP_FAILED});
        });
    }
}