import { ADD_TOKEN } from "./action";

const token = ""
//{type,payload} =action
export const AuthReducer = (store = token, { type, payload }) => {
    // console.log(store, "pay")
    switch (type) {
        case ADD_TOKEN:
            return { todos: payload };

        default:
            return store;
    }
}