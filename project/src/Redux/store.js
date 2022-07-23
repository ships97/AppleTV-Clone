import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/reducer";
import { loginreducer } from "./Login/reducer";
import { MoviesReducer } from "./Movies/reducer";
import { registerReducer } from "./Registration/reducer";

const rootReducers = combineReducers({
    Movies: MoviesReducer,
    login: loginreducer,
    register: registerReducer,
    auth: AuthReducer
})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
);

console.log("initial todos", store.getState())
