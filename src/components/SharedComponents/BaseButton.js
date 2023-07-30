import React from 'react';
import {
  Pressable,
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {BaseIcon} from './BaseIcon';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    ...FONTS.h3,
    color: 'white',
    textAlign: 'center',
    flex: 1,
    fontWeight: '700',
  },
  activityIndicator: {
    position: 'absolute',
    right: 15,
  },
  leftIcon: {
    marginLeft: 20,
    marginRight: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export const BaseButton = ({
  title,
  onPress,
  icon,
  otherStyles,
  disabled = false,
  textStyles,
  loading = false,
  Righticon,
  iconStyles,
  leftIconStyles,
  loadingColor,
  iconOrgColor,
  iconColor,
  iconSize,
  numberOfLines,
}) => {
  return (
    <Pressable
      android_ripple={{color: 'rgba(255,255,255,0.3)'}}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: loading || disabled ? COLORS.gray : COLORS.primary,
        },
        otherStyles,
      ]}>
      {icon && (
        <View style={[styles.leftIcon, leftIconStyles]}>
          <Image
            source={icon}
            style={[
              styles.icon,
              !iconOrgColor && {
                tintColor: iconColor ? iconColor : COLORS.white,
              },
            ]}
          />
        </View>
      )}
      <Text numberOfLines={numberOfLines} style={[styles.text, textStyles]}>
        {title}
      </Text>
      {Righticon && (
        <View style={iconStyles}>
          <BaseIcon icon={Righticon} size={iconSize} color={iconColor} />
        </View>
      )}
      <View style={styles.activityIndicator}>
        <ActivityIndicator
          animating={!disabled && loading ? true : false}
          size="small"
          color={loadingColor ?? COLORS.white}
        />
      </View>
    </Pressable>
  );
};
