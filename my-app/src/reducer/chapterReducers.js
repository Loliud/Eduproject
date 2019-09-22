let initialState = [];

const myReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'GET_CHAPTERS':
            state = action.chapters;
            return [...state]; 

        default: 
            return [...state];
    }
}

export default myReducer;