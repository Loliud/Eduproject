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
        default: 
            return state;
    }
}

export default myReducer;