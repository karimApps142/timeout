import moment from 'moment';
import toast from '../refs/toast';
import {URL} from '../server/config';
import icons from './icons';

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

const convertMinutesToHourMinuteFormat = minutes => {
  if (!minutes) return 0;
  const duration = moment.duration(minutes, 'minutes');
  const hours = Math.floor(duration.asHours());
  const mins = Math.floor(duration.asMinutes()) % 60;

  return `${hours}h ${mins}m`;
};

const emojis = [icons.one, icons.two, icons.three, icons.four, icons.five];

export default {
  getImage,
  getFullName,
  apiResponseErrorHandler,
  apiMessageHandler,
  convertMinutesToHourMinuteFormat,
  emojis,
};
