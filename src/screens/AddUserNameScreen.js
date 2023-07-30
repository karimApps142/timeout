import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseButton, BaseHeader, BaseInput, BaseView} from '../components';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';

export const AddUserNameScreen = ({navigation}) => {
  return (
    <BaseView>
      <View style={styles.container}>
        {/* style views */}
        <View style={[styles.BgBlackView, {top: '-100%', width: 180}]} />
        <View style={styles.BgBlackView} />

        <View style={styles.bottomMain}>
          <Text style={styles.text}>One more thing, </Text>
          <Text style={styles.createUserName}>
            Create an unique username so friends can find you 🥳
          </Text>

          <BaseInput
            placeholder={'Enter Username'}
            otherStyles={styles.input}
          />

          <BaseButton
            onPress={() => navigation.navigate('homeScreen')}
            title={'Enter'}
            Righticon={icons.next}
            iconColor={COLORS.lightGray}
            otherStyles={styles.button}
          />
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
    color: COLORS.white,
    ...FONTS.h3,
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
    marginVertical: 25,
  },
});
