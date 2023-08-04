import {useCallback, useContext, useEffect, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {Alert} from 'react-native';
import AuthContext from '../context/AuthContext';
import server from '../server';
import localStorage from '../server/localStorage';
import helper from '../constants/helper';
import {useNavigation} from '@react-navigation/native';

const useAuth = () => {
  const navigaiton = useNavigation();

  const [loading, setLoading] = useState(false);
  const [pushToken, setPushToken] = useState(null);

  const {trigger} = useContext(AuthContext);
  const {updateUser} = trigger;

  useEffect(() => {
    GoogleSignin.configure({});
  }, []);

  // const getDeviceToken = useCallback(async () => {
  //   const settings = await notifee.requestPermission();
  //   if (settings.authorizationStatus === AuthorizationStatus.DENIED) {
  //     Alert.alert(
  //       'Notification Permission Required',
  //       'Please allow notifications to receive important updates about your orders.',
  //       [
  //         {
  //           text: 'Cancel',
  //           onPress: () => console.log('Cancel Pressed'),
  //           style: 'cancel',
  //         },
  //         {text: 'Open Settings', onPress: notifee.openNotificationSettings},
  //       ],
  //       {cancelable: true},
  //     );
  //     return null;
  //   }

  //   await messaging().registerDeviceForRemoteMessages();
  //   const token = await messaging().getToken();
  //   setPushToken(token);
  // }, []);

  // useEffect(() => {
  //   getDeviceToken();
  // }, []);

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === 'active'
  //     ) {
  //       getDeviceToken();
  //     }

  //     appState.current = nextAppState;
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const loginWithGoogle = useCallback(async () => {
    try {
      setLoading(true);
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setLoading(false);

      const {
        user: {id, name, email, photo},
      } = userInfo;
      await loginWithSocialAccount('google', {id, name, email, photo});
    } catch (error) {
      setLoading(false);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        await GoogleSignin.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
      } else {
        Alert.alert('Err', JSON.stringify(error));
      }
    }
  }, [loginWithSocialAccount]);

  const loginWithSocialAccount = useCallback(
    async (provider, values) => {
      setLoading(true);
      const payload = {
        ...values,
        token: pushToken,
        provider,
      };
      return server.signup(payload).then(resp => {
        setLoading(false);
        if (!resp.ok) {
          return helper.apiResponseErrorHandler(resp);
        } else if (resp.data?.message === 'complete') {
          return localStorage.saveToken(resp.data.access_token).then(() => {
            updateUser(resp.data.user);
          });
        } else {
          navigaiton.navigate('addUserNameStack', {data: resp.data.data});
        }
      });
    },
    [updateUser, pushToken, navigaiton],
  );

  return {
    loading,
    loginWithGoogle,
    loginWithSocialAccount,
  };
};

export default useAuth;
