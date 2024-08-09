import { createSlice } from "@reduxjs/toolkit";
import { getToken, setToken as _setToken, request } from "@/utils"

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

        }
    }
})

const { setToken, setUserInfo } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setToken(res.data.token))
    }
}

const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await request.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}

export { fetchLogin, fetchUserInfo, setToken }

export default userReducer