/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

export const DataNotFound = ({title = 'No Data Found...'}) => (
  <Text
    style={{
      ...FONTS.body4,
      textAlign: 'center',
      marginTop: 20,
      color: COLORS.white,
    }}>
    {title}
  </Text>
);
