import client from './config';

const me = () => client.get('auth/me');

const signup = payload => client.post('auth/signup', payload);

const editProfile = payload => client.post('auth/edit-profile', payload);

const deleteAccount = id => client.delete(`auth/profile/${id}/delete`);

const getFriendsScreenTime = (page, payload) =>
  client.post(`v1/screen-times?page=${page}`, payload);

const searchUsers = payload => client.post('v1/search-users', payload);

const friendRequestSend = payload =>
  client.post('v1/friend-requests/send', payload);

const friendRequestAccept = id =>
  client.post(`v1/friend-requests/${id}/accept`);

export default {
  signup,
  me,
  editProfile,
  deleteAccount,
  getFriendsScreenTime,
  searchUsers,
  friendRequestSend,
  friendRequestAccept,
};
