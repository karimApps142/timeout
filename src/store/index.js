import {configureStore} from '@reduxjs/toolkit';

import auth from './auth';

export const store = configureStore({
  reducer: {
    auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
