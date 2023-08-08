import {useCallback, useContext, useEffect, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import jwt_decode from 'jwt-decode';
import {appleAuth} from '@invertase/react-native-apple-authentication';

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
  const {updateUser, signout} = trigger;

  useEffect(() => {
    GoogleSignin.configure({});
  }, []);

  const loginWithApple = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });
      console.log(appleAuthRequestResponse, '====>reached');

      const {user, email, fullName, identityToken} = appleAuthRequestResponse;

      const name = fullName.givenName
        ? fullName.givenName
        : fullName.middleName;

      let payload = null;

      if (email != null) {
        payload = {
          uid: user,
          email,
          name,
        };
      } else {
        const response = jwt_decode(identityToken);
        payload = {
          uid: user,
          email: response.email,
          name,
        };
        console.log(appleAuthRequestResponse, '====>else part');
        console.log(response, '====>else part jwtresponse');

        return;
      }

      await loginWithSocialAccount('apple', payload);
    } catch (error) {
      if (error.code === appleAuth.Error.CANCELED) {
        console.log('User canceled Apple Sign-In.');
      } else {
        console.error('Apple Sign-In Error:', error);
      }
    }
  };

  const loginWithGoogle = useCallback(async () => {
    try {
      setLoading(true);
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setLoading(false);

      const {
        user: {id, name, email},
      } = userInfo;
      await loginWithSocialAccount('google', {id, name, email});
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

  const deleteAccount = useCallback(
    async id => {
      setLoading(true);
      const respons = await server.deleteAccount(id);
      setLoading(false);
      if (!respons.ok) {
        return helper.apiResponseErrorHandler(respons);
      }
      signout();
    },
    [signout],
  );

  return {
    loading,
    loginWithApple,
    loginWithGoogle,
    loginWithSocialAccount,
    deleteAccount,
  };
};

export default useAuth;
