import toast from '../refs/toast';
import {URL} from '../server/config';

const getImage = img => {
  if (!img) return null;
  if (img.includes('http') || img.includes('base64')) {
    return img;
  }
  return URL + img;
};

const getFullName = user =>
  user ? `${user.first_name} ${user.last_name}` : null;

const apiResponseErrorHandler = resp => {
  const message = resp?.data?.message || 'NETWORK_ERR';
  toast.show(message);
};

const apiMessageHandler = resp => {
  if (resp?.data?.message) {
    toast.show(resp.data.message);
  }
};

export default {
  getImage,
  getFullName,
  apiResponseErrorHandler,
  apiMessageHandler,
};
