import { createSlice } from "@reduxjs/toolkit";
import { getToken, setToken as _setToken, request, removeToken } from "@/utils"
import { loginAPI, getProfileAPI } from "@/apis/user";

const userStore = createSlice({
    name: "user",
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    // methods
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload

        },
        clearUserInfo(state, action) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

const { setToken, setUserInfo, clearUserInfo } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await loginAPI(loginForm)
        dispatch(setToken(res.data.token))
    }
}

const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}

export { fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer