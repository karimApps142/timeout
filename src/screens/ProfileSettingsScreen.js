import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  BaseHeader,
  BaseInput,
  BaseView,
  SupportButton,
  SupportScreen,
} from '../components';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';

export const ProfileSettingsScreen = () => {
  return (
    <BaseView>
      <View style={styles.container}>
        <BaseHeader otherStyles={styles.header} title="Settings" />

        <ScrollView contentContainerStyle={styles.bottomMain}>
          {/* Profile */}
          <Text style={styles.headings}>Profile</Text>
          <BaseInput
            leftIcon={icons.user}
            icon={icons.edit}
            placeholder={'Name'}
          />
          <BaseInput
            leftIcon={icons.user}
            icon={icons.edit}
            placeholder={'Username'}
          />
          {/* Account */}
          <Text style={[styles.headings, {marginTop: 10}]}>Account</Text>
          <BaseInput
            leftIcon={icons.email}
            editable={false}
            placeholder={'Email'}
          />
          {/* Support  */}
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

          {/* More */}
          <Text style={[styles.headings, {marginTop: 10}]}>More</Text>
          <SupportButton icon={icons.invite} title={'Invite Friends'} />
          <SupportButton icon={icons.bin} title={'Delete Account'} />
          <SupportButton icon={icons.exit} title={'Logout'} />
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
