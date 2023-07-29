
export const initialAuthState = {
    user: null,
    isLoading: false,
    error: "",
    isLoggedIn: false
}

export const authReducer = (state = initialAuthState, action: any) => {

    switch(action.type) {

        default:
            return state
    }
}