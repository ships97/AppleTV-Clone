import axios from "axios";

export const MoviesActions = {
    GET_MOVIES_REQUEST: "GET_MOVIES_REQUEST",
    GET_MOVIES_SUCCESS: "GET_MOVIES_SUCCESS",
    GET_MOVIES_FAILURE: "GET_MOVIES_FAILURE",
};

export const getdataRequest = () => ({
    type: MoviesActions.GET_MOVIES_REQUEST
});

export const getdataSuccess = (data) => ({
    type: MoviesActions.GET_MOVIES_SUCCESS,
    payload: data
});

export const getdataFailure = () => ({
    type: MoviesActions.GET_MOVIES_FAILURE
});

export const fetchMovies = (payload) => (dispatch) => {
    const getdataActionreq = getdataRequest();
    dispatch(getdataActionreq);
    // console.log(`token is`, getState().auth.token);
    return axios({
        url: "http://localhost:8080/data",
        method: "GET",
        params: {
            ...payload
        }
    })
        .then((res) => {
            const getdataActionres = getdataSuccess(res.data);
            dispatch(getdataActionres);
        })
        .catch((err) => {
            const getdataActionerr = getdataFailure();
            dispatch(getdataActionerr);
        });
};


