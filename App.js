import React, {useState, useMemo, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthContext from './src/context/AuthContext';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-easy-toast';
import {toastRef} from './src/refs/toast';
import {navigationRef} from './src/navigations/rootNavigator';
import {StackNavigator} from './src/navigations/StackNavigator';

const App = () => {
  return (
    <AuthContext.Provider>
      <NavigationContainer ref={navigationRef}>
        <Toast ref={toastRef} />

        <StackNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
