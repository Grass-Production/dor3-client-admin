import { createSlice } from '@reduxjs/toolkit';

export interface CheckLoginState {
  isLogin: boolean;
}

// localStorage.setItem('isLogin', JSON.stringify(false));

const storedIsLogin = localStorage.getItem('isLogin');

const initialState: CheckLoginState = {
  isLogin: storedIsLogin !== null ? JSON.parse(storedIsLogin) : false,
  //   isLogin: false,
};

export const checkLoginSlice = createSlice({
  name: 'checkLogin',
  initialState: initialState,
  reducers: {
    isLoggedIn: (state) => {
      localStorage.setItem('isLogin', JSON.stringify(true));
      //   state.isLogin = storedIsLogin !== null ? JSON.parse(storedIsLogin) : false;
      state.isLogin = true;
    },
    isLoggedOut: (state) => {
      localStorage.setItem('isLogin', JSON.stringify(false));
      //   state.isLogin = storedIsLogin !== null ? JSON.parse(storedIsLogin) : false;
      state.isLogin = false;
    },
  },
});

export const { isLoggedIn, isLoggedOut } = checkLoginSlice.actions;
export default checkLoginSlice.reducer;
