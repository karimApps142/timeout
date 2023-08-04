import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

const ErrorMessage = ({visible, error}) => {
  if (!visible || !error) return null;
  return (
    <View>
      <Text style={{...FONTS.body4, fontSize: 11, color: COLORS.error}}>
        {error}
      </Text>
    </View>
  );
};

export {ErrorMessage};
