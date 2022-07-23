import { store } from "../store";
import { registeractions } from "./action";

const init = {
    loading: false,
    users: [],
    error: false
};

export const registerReducer = (store = init, { type, payload }) => {

    switch (type) {
        case registeractions.POST_REGISTER_REQUEST: {
            return {
                ...store,
                loading: true,
                error: false
            }
        }
        case registeractions.POST_REGISTER_SUCCESS: {
            return {
                ...store,
                loading: false,
                users: payload,
                error: false
            }
        }
        case registeractions.POST_REGISTER_FAILURE: {
            return {
                ...store,
                loading: false,
                users: null,
                error: true
            }
        }
        default:
            return store;
    }
}