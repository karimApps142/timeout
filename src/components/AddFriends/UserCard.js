import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {BaseIcon} from '../SharedComponents/BaseIcon';
import icons from '../../constants/icons';

export const UserCard = ({onPress, disabled = false}) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        padding: 10,
        borderRadius: 15,
        marginVertical: 5,
        // opacity: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {/* Emojy */}
      <Image source={icons.emoji} style={{height: 40, width: 40}} />

      {/* User Name */}
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: 5,
          marginRight: 5,
          flex: 1,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h4, fontWeight: '700'}}>
          Real Name
        </Text>
        <Text
          style={{
            color: COLORS.lightGray,
            ...FONTS.body5,
            lineHeight: 12,
            fontSize: 10,
          }}>
          @username
        </Text>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          padding: 2,
          paddingHorizontal: 15,
          borderWidth: 1,
          borderColor: COLORS.white,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.body5,
            // fontSize: 10,
            // lineHeight: 14,
            marginRight: 5,
          }}>
          Accept
        </Text>
        <BaseIcon icon={icons.accept} color={COLORS.white} size={14} />
      </TouchableOpacity>
    </View>
  );
};
