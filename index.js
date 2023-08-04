/**
 * @format
 */

import React, {useMemo, useState} from 'react';
import {AppRegistry} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';
import AuthContext from './src/context/AuthContext';

const Root = ({isHeadless}) => {
  const [user, setUser] = useState(null);

  const trigger = useMemo(
    () => ({
      updateUser: data => {
        setUser(data);
      },
      signout: async () => {},
      initialize: async () => {},
    }),
    [],
  );
  if (isHeadless) {
    return null;
  }
  return (
    <AuthContext.Provider value={{user, trigger}}>
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <App />
        </GestureHandlerRootView>
      </Provider>
    </AuthContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
