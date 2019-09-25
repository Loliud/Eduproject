import *as types from '../constants/types';
let initialState = {
    authError: null
};

const myReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.LOGIN_FAILED:
            console.log('Login failed');
            return{
                ...state,
                authError: 'Login failed'
            }
        case types.LOGIN_SUCCESS:
            console.log('Login success');
            return{
                ...state,
                authError: null
            }
        case types.SIGN_SUCCESS:
            console.log('Sign up success');
            return {
                ...state,
                authError: null
            }
        case types.SIGN_UP_FAILED:
            console.log('Sign up failed');
            return {
                ...state,
                authError: 'Sign up failed'
            }
        default: 
            return state;
    }
}

export default myReducer;