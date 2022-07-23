import axios from "axios";

export const registeractions = {
    POST_REGISTER_REQUEST: "POST_REGISTER_REQUEST",
    POST_REGISTER_SUCCESS: "POST_REGISTER_SUCCESS",
    POST_REGISTER_FAILURE: "POST_REGISTER_FAILURE",
}

export const postRegisteredreq = () => ({
    type: registeractions.POST_REGISTER_REQUEST
})

export const postRegisteredres = (data) => ({
    type: registeractions.POST_REGISTER_SUCCESS,
    payload: data
})

export const postRegisterederror = () => ({
    type: registeractions.POST_REGISTER_FAILURE,
})

export const registernuser = (user) => (dispatch) => {
    dispatch(postRegisteredreq());
    console.log(user, "user")
    return axios.post('https://ghost-auth-service.herokuapp.com/signup', user)
        .then((res) => {
            console.log(res.data.tokenSecret, "trs")
            dispatch(postRegisteredres(res.data.tokenSecret))
            alert("Apple ID created")
        })
        .catch((err) => {
            alert("wrong mailid or passwword")
            console.log(err, "err")
            dispatch(postRegisterederror())
        })
}

