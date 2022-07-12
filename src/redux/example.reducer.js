/* Constants */
const SET_LOADING = "SET_LOADING";
const SET_MESSAGE = "SET_MESSAGE";

const initialState = {
    isLoading: false,
    message: 'default',
}
export function example(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: action.payload }
        case SET_MESSAGE:
            return { ...state, message: action.payload }
        default:
            return state;
    }
}
