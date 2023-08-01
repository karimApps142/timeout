import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import icons from '../../constants/icons';

const HomeFooter = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={icons.logo2} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: '#2F2F2F',
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 80,
  },
  logoContainer: {
    height: 80,
    width: 80,
    overflow: 'hidden',
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute',
    top: -30,
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
  },
});

export {HomeFooter};
