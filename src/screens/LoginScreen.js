import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {BaseButton, BaseView, ORLine} from '../components';
import {COLORS, SIZES} from '../constants/theme';
import icons from '../constants/icons';
import useAuth from '../hooks/useAuth';

export const LoginScreen = ({navigation}) => {
  const {loading, loginWithGoogle} = useAuth();
  return (
    <BaseView overlayLoading={loading}>
      <View style={styles.container}>
        <View style={styles.BgBlackView} />

        <View style={styles.logoMain}>
          <Image source={icons.logo} style={styles.logo} />
        </View>

        <View style={styles.buttonMain}>
          <BaseButton
            onPress={() => loginWithGoogle()}
            title={'Log In With Google'}
            icon={icons.google}
            iconOrgColor
            otherStyles={styles.button}
            textStyles={styles.btnText}
          />

          <ORLine />

          <BaseButton
            onPress={() => {
              navigation.navigate('addUserNameStack');
            }}
            title={'Log In With Apple'}
            icon={icons.apple}
            iconOrgColor
            otherStyles={styles.button}
            textStyles={styles.btnText}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  BgBlackView: {
    position: 'absolute',
    top: '-25%',
    left: 0,
    right: 0,
    bottom: 0,
    height: SIZES.height * 2,
    width: 100,
    backgroundColor: '#040206',
    transform: [{translateX: -50}, {translateY: -50}, {rotate: '45deg'}],
  },
  logoMain: {
    height: 180,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonMain: {
    padding: 15,
    paddingBottom: 30,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  button: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  btnText: {
    color: COLORS.black,
    flex: 0,
  },
});
