import { MoviesActions } from "./action";

const init = {
    loading: false,
    movies: [],
    error: false
};


export const MoviesReducer = (store = init, { type, payload }) => {

    switch (type) {
        case MoviesActions.GET_MOVIES_REQUEST: {
            return {
                ...store,
                loading: true,
                error: false
            };
        }
        case MoviesActions.GET_MOVIES_SUCCESS: {
            return {
                ...store,
                loading: false,
                fruits: payload
            };
        }
        case MoviesActions.GET_MOVIES_FAILURE: {
            return {
                ...store,
                loading: false,
                error: true
            };
        }

        default:
            return store;
    }
}