export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";


export function setAuthedUser(authedUserInfo) {
    return {
        type : SET_AUTHED_USER,
        authedUserInfo,
    }
}

export function logoutUser () {
    return {
        type : LOGOUT_USER,
    }
}
