import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  users: [],
  next_page: 1,
  pagination: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
    setUsers: (state, {payload}) => {
      const {data, loading, refresh} = payload;
      state.users =
        loading || refresh ? data.data : [...state.users, ...data.data];
      if (data.next_page_url) {
        state.next_page = data.next_page_url.split('=').pop();
        state.pagination = true;
      } else {
        state.pagination = false;
      }
    },
  },
});

export const {setLoading, setUsers} = homeSlice.actions;

export default homeSlice.reducer;
