export const ADD_TOKEN = "ADD_TOKEN";

// to avoid spelling mistake we store it in the variable.
export  const adduser = (token) => {
    return {
        type: ADD_TOKEN,
        payload: token
    };
}
