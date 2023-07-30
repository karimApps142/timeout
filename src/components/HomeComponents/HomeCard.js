import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {BaseIcon} from '../SharedComponents/BaseIcon';
import icons from '../../constants/icons';

export const HomeCard = ({onPress, disabled = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
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
      {/* Left Side */}

      <BaseIcon icon={icons.arrow_up} color={COLORS.green} size={12} />
      <Text
        style={{
          ...FONTS.body5,
          color: COLORS.white,
          marginLeft: 2,
          fontWeight: '700',
        }}>
        2
      </Text>
      {/* Emojy */}
      <Image
        source={icons.emoji}
        style={{height: 40, width: 40, marginLeft: 10}}
      />

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

      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h2,
          fontWeight: '700',
          marginRight: 2,
        }}>
        2h 45m
      </Text>
      <BaseIcon icon={icons.clock} color={COLORS.white} size={24} />
    </TouchableOpacity>
  );
};
