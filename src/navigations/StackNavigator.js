import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddFriendsScreen,
  AddUserNameScreen,
  HomeScreen,
  LoginScreen,
  ProfileSettingsScreen,
  UserDetailScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="loginStack"
    screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
    <Stack.Screen name="loginStack" component={LoginScreen} />
    <Stack.Screen name="addUserNameStack" component={AddUserNameScreen} />
  </Stack.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="loginStack"
    screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
    <Stack.Screen name="homeScreen" component={HomeScreen} />
    <Stack.Screen name="userDetailScreen" component={UserDetailScreen} />
    <Stack.Screen name="addFriendsScreen" component={AddFriendsScreen} />
    <Stack.Screen
      name="profileSettingScreen"
      component={ProfileSettingsScreen}
    />
  </Stack.Navigator>
);

export {AuthStack, StackNavigator};
