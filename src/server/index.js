import client from './config';

const me = () => client.get('auth/me');

const signup = payload => client.post('auth/signup', payload);

export default {
  me,
  signup,
};
