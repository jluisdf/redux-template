/* Constants */
const SET_LOADING = "SET_LOADING";
const SET_MESSAGE = "SET_MESSAGE";

export const exampleActions = { setLoading, setMessage }

function setLoading(loading){
    return {
        type: SET_LOADING,
        payload: loading
    }
}

function setMessage(message) {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}
