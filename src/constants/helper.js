import moment from 'moment';
import Share from 'react-native-share';
import {openComposer} from 'react-native-email-link';

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

const inviteFriends = () => {
  const appName = 'ScreenTime';
  const message = `Let's track our screen time together using ${appName} app!`;
  const appStoreLink =
    'https://apps.apple.com/us/app/timedout-app/id6453208829';
  const playStoreLink =
    'https://play.google.com/store/apps/details?id=com.screentime.mypromax';

  const invitationContent = {
    message: `${message}\n\nDownload ${appName} app:\n\niOS: ${appStoreLink}\n\nAndroid: ${playStoreLink}`,
  };

  Share.open(invitationContent)
    .then(res => {
      console.log('Invite sent:', res);
    })
    .catch(err => {
      console.log('Error sending invite:', err);
    });
};

const handleLeaveReview = () => {
  const emailContent = {
    subject: 'Review',
    body: 'I would like to leave a review for your app.',
    to: 'karimappstesting@gmail.com',
  };

  openComposer(emailContent);
};

const handleReportErrorFeedback = () => {
  const emailContent = {
    subject: 'Error/Feedback Report',
    body: 'I encountered an error in your app. Here are the details:',
    to: 'karimappstesting@gmail.com',
  };

  openComposer(emailContent);
};

const handleSupport = () => {
  const emailContent = {
    subject: 'Support Request',
    body: 'I need help with your app. Here is my request:',
    to: 'karimappstesting@gmail.com',
  };

  openComposer(emailContent);
};

export default {
  getImage,
  getFullName,
  apiResponseErrorHandler,
  apiMessageHandler,
  convertMinutesToHourMinuteFormat,
  inviteFriends,
  handleLeaveReview,
  handleReportErrorFeedback,
  handleSupport,
  emojis,
};
