import React from 'react';
import {Image} from 'react-native';
import {COLORS} from '../../constants/theme';

export const BaseIcon = ({icon, size, color, orgColor, otherStyles}) => {
  return (
    <Image
      source={icon}
      style={[
        {
          height: size || 20,
          width: size || 20,
          tintColor: color || orgColor || COLORS.black,
        },
        otherStyles,
      ]}
    />
  );
};
