//和用户相关的状态管理
import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'
import { getToken, removeToken, setToken as _setToken } from '@/utils'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || ''
  },
  reducers: {
    setToken(state, action) {
      state.userInfo = action.payload
      _setToken(action.payload)
    }
  }
})

//获取actionCreator
const { setToken } = userStore.actions
//异步
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    console.log(res.data)
    dispatch(setToken(res.data.token))

  }
}
const reducer = userStore.reducer
export { fetchLogin, setToken }
export default reducer
