import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  BaseHeader,
  BaseIcon,
  BaseInput,
  BaseView,
  SupportButton,
} from '../components';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';
import AuthContext from '../context/AuthContext';
import useAuth from '../hooks/useAuth';
import helper from '../constants/helper';

export const ProfileSettingsScreen = ({navigation}) => {
  const {
    user,
    trigger: {signout},
  } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(user?.avatar);
  const {loading: serverLoading, updateProfile} = useAuth();

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

  useEffect(() => {
    if (user?.avatar != avatar) {
      updateProfile({avatar});
    }
  }, [avatar, user?.avatar, updateProfile]);

  const onPressDelete = useCallback(() => {
    showAlert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      'Delete',
      () => deleteAccount(user?.id),
    );
  }, [deleteAccount, user?.id]);

  const onPressSignout = useCallback(() => {
    showAlert(
      'Signout',
      'Are you sure you want to sign out of your account?',
      'Signout',
      () => signout(),
    );
  }, [signout]);

  return (
    <BaseView overlayLoading={loading || serverLoading}>
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
          <View style={styles.card}>
            {helper.emojis.map((emj, index) => (
              <TouchableOpacity
                key={index}
                style={styles.cartItem}
                onPress={() => setAvatar(index)}
                activeOpacity={0.7}>
                {avatar == index ? (
                  <BaseIcon
                    icon={icons.arrow_down}
                    size={10}
                    color={COLORS.white}
                  />
                ) : null}

                <View style={styles.space} />
                <BaseIcon
                  icon={emj}
                  size={
                    avatar == index
                      ? SIZES.width / (helper.emojis.length + 2)
                      : SIZES.width / (helper.emojis.length * 2)
                  }
                  orgColor
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.headings, {marginTop: 10}]}>Account</Text>
          <BaseInput
            leftIcon={icons.email}
            value={user?.email}
            editable={false}
            placeholder={'Email'}
          />
          <Text style={[styles.headings, {marginTop: 10}]}>Support</Text>
          <SupportButton
            onPress={() => navigation.navigate('Faq')}
            icon={icons.notification}
            title={'Frequently asked question'}
          />
          <SupportButton
            icon={icons.call}
            title={'Support'}
            onPress={() => helper.handleSupport()}
          />
          <SupportButton icon={icons.privacy} title={'Privacy Policy'} />
          <SupportButton
            onPress={() => helper.handleReportErrorFeedback()}
            icon={icons.feedback}
            title={'Report an error/feedback'}
          />
          <SupportButton
            onPress={() => helper.handleLeaveReview()}
            icon={icons.star}
            title={'Leave a review'}
          />

          <Text style={[styles.headings, {marginTop: 10}]}>More</Text>
          <SupportButton
            onPress={() => helper.inviteFriends()}
            icon={icons.invite}
            title={'Invite Friends'}
          />
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
  card: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  space: {
    marginTop: 5,
  },
});
