import React, {useCallback, useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {BaseHeader, BaseView} from '../components';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {BaseForm} from '../components/Form/BaseForm';
import {SubmitButton} from '../components/Form/SubmitButton';
import {BaseFormInput} from '../components/Form/BaseFormInput';
import server from '../server';
import helper from '../constants/helper';
import AuthContext from '../context/AuthContext';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  name: Yup.string().required('Name is required'),
});

export const EditProfileScreen = ({navigation, route}) => {
  const {
    user,
    trigger: {updateUser},
  } = useContext(AuthContext);
  const input = route.params?.input ?? null;
  const [loading, setLoading] = useState(false);

  const updateProfile = useCallback(
    async payload => {
      setLoading(true);
      const response = await server.editProfile(payload);
      setLoading(false);
      if (!response.ok) {
        return helper.apiResponseErrorHandler(response);
      }
      updateUser(response.data);
      navigation.goBack();
    },
    [navigation, updateUser],
  );

  if (!input) {
    return null;
  }

  return (
    <BaseView overlayLoading={loading}>
      <View style={styles.container}>
        <BaseHeader
          title={`Edit ${
            input === 'username'
              ? 'User name'
              : input === 'name'
              ? 'Name'
              : null
          }`}
        />
        <View style={[styles.BgBlackView, {top: '-100%', width: 180}]} />
        <View style={styles.BgBlackView} />

        <View style={styles.bottomMain}>
          <BaseForm
            initialValues={{
              name: user?.name,
              username: user?.username,
            }}
            validationSchema={validationSchema}
            onSubmit={updateProfile}>
            {input === 'username' ? (
              <BaseFormInput
                name="username"
                placeholder={'Enter Username'}
                otherStyles={styles.input}
              />
            ) : input === 'name' ? (
              <BaseFormInput
                name="name"
                placeholder={'Enter Your Name'}
                otherStyles={styles.input}
              />
            ) : null}

            <SubmitButton
              title={'Update'}
              iconColor={COLORS.lightGray}
              otherStyles={styles.button}
            />
          </BaseForm>
        </View>
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(30, 29, 31, 1)',
    flex: 1,
  },
  BgBlackView: {
    position: 'absolute',
    top: 0,
    height: SIZES.height * 2,
    width: 100,
    backgroundColor: '#040206',
    transform: [{translateX: -50}, {translateY: -50}, {rotate: '45deg'}],
    zIndex: -100,
  },
  bottomMain: {
    padding: 15,
    marginTop: 100,
  },
  text: {
    color: COLORS.lightGray,
    ...FONTS.body3,
    textAlign: 'center',
  },
  createUserName: {
    ...FONTS.h3,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2A2932',
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#2A2932',
  },
});
