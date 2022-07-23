import { registeractions } from "./action";


const initState = {
    error: false,
    isauthenticated: false,
    loading: false,
    token: '',
    // appleid: ""
}


export const loginreducer = (store = initState, { type, payload }) => {

    switch (type) {
        case registeractions.ADD_TOKEN_REQUEST:
            return {
                ...store,
                loading: true,
                error: false,
                isauthenticated: false,
            }
        case registeractions.ADD_TOKEN_SUCCESS:
            return {
                ...store,
                loading: false,
                error: false,
                isauthenticated: true,
                token: payload.token,
                // appleid: payload.username
            }
        case registeractions.ADD_TOKEN_FAILURE:
            return {
                ...store,
                error: true,
                loading: false,
                isauthenticated: false,
                token: "",
                // username: ""
            }

        case registeractions.LOGOUT:
            return { ...initState };
        default:
            return store;
    }
}