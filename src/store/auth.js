import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
  },
});

export const {setLoading} = authSlice.actions;

export default authSlice.reducer;
