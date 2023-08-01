/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';

const Root = ({isHeadless}) => {
  if (isHeadless) {
    return null;
  }
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <App />
      </GestureHandlerRootView>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
