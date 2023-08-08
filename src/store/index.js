import {configureStore} from '@reduxjs/toolkit';

import auth from './auth';
import home from './home';
import friends from './friends';

export const store = configureStore({
  reducer: {
    auth,
    home,
    friends,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
