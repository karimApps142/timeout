import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import server from '../server';
import helper from '../constants/helper';

const initialState = {
  loading: false,
  overlayLoading: false,
  friendRequests: [],
  searchData: [],
};

export const friendRequestSend = createAsyncThunk(
  'friends/friendRequestSend',
  async (payload, {dispatch}) => {
    dispatch(setOverlayLoading(true));
    const response = await server.friendRequestSend(payload);
    dispatch(setOverlayLoading(false));
    if (!response.ok) {
      return helper.apiResponseErrorHandler(response);
    }
    dispatch(onFriendRequestSend(response.data));
  },
);

export const friendRequestAccept = createAsyncThunk(
  'friends/friendRequestAccept',
  async (id, {dispatch}) => {
    dispatch(setOverlayLoading(true));
    const response = await server.friendRequestAccept(id);
    dispatch(setOverlayLoading(false));
    if (!response.ok) {
      return helper.apiResponseErrorHandler(response);
    }
    dispatch(onFriendRequestAccept(id));
  },
);

export const getSearchData = createAsyncThunk(
  'friends/getSearchData',
  async (payload, {dispatch}) => {
    dispatch(setLoading(true));
    const response = await server.searchUsers(payload);
    dispatch(setLoading(false));
    if (!response.ok) {
      return helper.apiResponseErrorHandler(response);
    }
    dispatch(setSearchData(response.data));
  },
);

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
    setOverlayLoading: (state, {payload}) => {
      state.overlayLoading = payload;
    },
    setSearchData: (state, {payload}) => {
      const {friendRequests, searchData} = payload;
      state.friendRequests = friendRequests;
      state.searchData = searchData;
    },
    onFriendRequestAccept: (state, {payload}) => {
      state.friendRequests = state.friendRequests.filter(i => i.id !== payload);
    },
    onFriendRequestSend: (state, {payload}) => {
      const {friend_id} = payload;
      state.searchData.map((i, indx) =>
        i.id === friend_id ? (state.searchData[indx].to = true) : null,
      );
    },
  },
});

export const {
  setLoading,
  setOverlayLoading,
  setSearchData,
  onFriendRequestAccept,
  onFriendRequestSend,
} = friendsSlice.actions;

export default friendsSlice.reducer;
