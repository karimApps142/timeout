import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-easy-toast';
import {toastRef} from './src/refs/toast';
import {navigationRef} from './src/navigations/rootNavigator';
import {AuthStack, StackNavigator} from './src/navigations/StackNavigator';
import {StatusBar} from 'react-native';
import AuthContext from './src/context/AuthContext';

const App = () => {
  const {user} = useContext(AuthContext);

  const renderContent = () => {
    switch (user?.role) {
      case 'customer':
        return <StackNavigator />;
      default:
        return <AuthStack />;
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Toast ref={toastRef} />
      {renderContent()}
    </NavigationContainer>
  );
};

export default App;
