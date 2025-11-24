//和用户相关的状态管理
import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'
import { getToken, removeToken, setToken as _setToken } from '@/utils'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  reducers: {
    setToken(state, action) {
      state.userInfo = action.payload
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.userInfo = {}
      state.token = ''
      removeToken()
    }
  }
})

//获取actionCreator
const { setToken, setUserInfo, clearUserInfo } = userStore.actions
//异步
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    console.log(res.data)
    dispatch(setToken(res.data.token))

  }
}
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get('/user/profile')
    dispatch(setUserInfo(res.data))
  }
}
const reducer = userStore.reducer
export { fetchLogin, setToken, fetchUserInfo, setUserInfo, clearUserInfo }
export default reducer
