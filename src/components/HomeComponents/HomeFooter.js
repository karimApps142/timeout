import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import icons from '../../constants/icons';
import {COLORS} from '../../constants/theme';

export const HomeFooter = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#2F2F2F',
        position: 'absolute',
        bottom: 0,
        zIndex: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <TouchableOpacity
        style={{
          height: 80,
          width: 80,
          overflow: 'hidden',
          borderRadius: 50,
          //   position: 'absolute',
          alignSelf: 'center',
        }}>
        <Image
          source={icons.logo2}
          style={{height: '100%', width: '100%', resizeMode: 'center'}}
        />
      </TouchableOpacity>
    </View>
  );
};
