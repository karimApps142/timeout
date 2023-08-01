import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthContext from './src/context/AuthContext';
import Toast from 'react-native-easy-toast';
import {toastRef} from './src/refs/toast';
import {navigationRef} from './src/navigations/rootNavigator';
import {StackNavigator} from './src/navigations/StackNavigator';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <AuthContext.Provider value={{}}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <Toast ref={toastRef} />
        <StackNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
