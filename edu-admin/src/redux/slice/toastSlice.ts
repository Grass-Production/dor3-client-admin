import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
export interface ToastState {
  value: boolean;
}

const initialState: ToastState = {
  value: false,
};

export const toastSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    show: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
      toast.error('Please Login');
    },
    off: (state) => {
      state.value = false;
    },
  },
});

export const { show, off } = toastSlice.actions;

export default toastSlice.reducer;
