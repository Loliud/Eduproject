import axios from 'axios';
import *as types from '../constants/types';
export const fetchChapter = () =>{
    return (dispatch) =>{
        axios.get('https://5d3029eb28465b00146aaca5.mockapi.io/api/chapterEdu')
        .then(res =>{
            // console.log(res.data);
            dispatch({type: types.GET_CHAPTERS, chapters: res.data});
            console.log(res.data);
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
            const stringArray = newUser.name.split(' ');
            let avar = '';

            if(stringArray.length > 1){
                console.log(stringArray);
                 avar = stringArray[stringArray.length - 2][0] + stringArray[stringArray.length - 1][0];
            }else{
                 avar = stringArray[0][0];
            }
            
            return firestore.collection('appUsers').doc(res.user.uid).set({
                name: newUser.name,
                avar: avar
            });
        }).then(() =>{
            dispatch({type: types.SIGN_SUCCESS});
        })
        .catch(err =>{
            dispatch({type: types.SIGN_UP_FAILED});
        });
    }
}

export const submitForm = (excersises, key, profile) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log(key);
        firestore.collection('appUsers').doc(key).set({
            name: profile.name,
            avar: profile.avar,
            excersises: excersises
        });
    }
}