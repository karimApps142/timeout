import client from './config';

const me = () => client.get('auth/me');

export default {
  me,
};
