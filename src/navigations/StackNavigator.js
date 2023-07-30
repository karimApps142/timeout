import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddFriendsScreen,
  AddUserNameScreen,
  HomeScreen,
  LoginScreen,
  ProfileSettingsScreen,
  UserDetailScreen,
} from '../screens';
import {Settings} from 'react-native';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="loginStack"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="loginStack" component={LoginScreen} />
    <Stack.Screen name="addUserNameStack" component={AddUserNameScreen} />
    <Stack.Screen name="homeScreen" component={HomeScreen} />
    <Stack.Screen name="userDetailScreen" component={UserDetailScreen} />
    <Stack.Screen name="addFriendsScreen" component={AddFriendsScreen} />
    <Stack.Screen
      name="profileSettingScreen"
      component={ProfileSettingsScreen}
    />
  </Stack.Navigator>
);

export {StackNavigator};
