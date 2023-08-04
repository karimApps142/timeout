import {create} from 'apisauce';
import localStorage from './localStorage';

export const baseURL = 'http://192.168.0.120:8000/api';
export const URL = 'http://192.168.0.120:8000/storage/';

// export const baseURL = 'https://dashboard.tarbiyalegacy.com/api';
// export const URL = 'https://dashboard.tarbiyalegacy.com/storage/';

const apiClient = create({baseURL});

apiClient.addAsyncRequestTransform(async request => {
  const token = await localStorage.getToken();
  console.log('bearer_token-->', token);
  if (!token) return;
  request.headers['Authorization'] = `Bearer ${token}`;
});

export default apiClient;
