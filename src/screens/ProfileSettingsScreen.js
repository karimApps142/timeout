import React, {useCallback, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {BaseHeader, BaseInput, BaseView, SupportButton} from '../components';
import {COLORS, FONTS} from '../constants/theme';
import icons from '../constants/icons';
import AuthContext from '../context/AuthContext';
import useAuth from '../hooks/useAuth';

export const ProfileSettingsScreen = ({navigation}) => {
  const {
    user,
    trigger: {signout},
  } = useContext(AuthContext);

  const {loading, deleteAccount} = useAuth();

  const showAlert = (title, message, actionText, onPress) => {
    Alert.alert(title, message, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: actionText,
        style: 'destructive',
        onPress: onPress,
      },
    ]);
  };

  const onPressDelete = useCallback(() => {
    showAlert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      'Delete',
      () => deleteAccount(user?.id),
    );
  }, []);

  const onPressSignout = useCallback(() => {
    showAlert(
      'Signout',
      'Are you sure you want to sign out of your account?',
      'Signout',
      () => signout(),
    );
  }, [signout]);

  return (
    <BaseView overlayLoading={loading}>
      <View style={styles.container}>
        <BaseHeader otherStyles={styles.header} title="Settings" />

        <ScrollView contentContainerStyle={styles.bottomMain}>
          <Text style={styles.headings}>Profile</Text>
          <BaseInput
            leftIcon={icons.user}
            editable={false}
            value={user?.name}
            icon={icons.edit}
            placeholder={'Name'}
            onPressIcon={() =>
              navigation.navigate('EditProfile', {
                input: 'name',
              })
            }
          />
          <BaseInput
            leftIcon={icons.user}
            icon={icons.edit}
            editable={false}
            value={user?.username}
            placeholder={'Username'}
            onPressIcon={() =>
              navigation.navigate('EditProfile', {
                input: 'username',
              })
            }
          />
          <Text style={[styles.headings, {marginTop: 10}]}>Account</Text>
          <BaseInput
            leftIcon={icons.email}
            value={user?.email}
            editable={false}
            placeholder={'Email'}
          />
          <Text style={[styles.headings, {marginTop: 10}]}>Support</Text>
          <SupportButton
            icon={icons.notification}
            title={'Frequently asked question'}
          />
          <SupportButton icon={icons.call} title={'Support'} />
          <SupportButton icon={icons.privacy} title={'Privacy Policy'} />
          <SupportButton
            icon={icons.feedback}
            title={'Report an error/feedback'}
          />
          <SupportButton icon={icons.star} title={'Leave a review'} />

          <Text style={[styles.headings, {marginTop: 10}]}>More</Text>
          <SupportButton icon={icons.invite} title={'Invite Friends'} />
          <SupportButton
            onPress={onPressDelete}
            icon={icons.bin}
            title={'Delete Account'}
          />
          <SupportButton
            onPress={onPressSignout}
            icon={icons.exit}
            title={'Logout'}
          />
        </ScrollView>
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary_second,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    backgroundColor: COLORS.primary_second,
    flex: 1,
  },
  bottomMain: {
    padding: 15,
    paddingTop: 0,
  },
  headings: {
    color: COLORS.gray,
    ...FONTS.h4,
  },
});
