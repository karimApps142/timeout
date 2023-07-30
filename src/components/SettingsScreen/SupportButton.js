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
import {BaseIcon} from '../SharedComponents/BaseIcon';
import icons from '../../constants/icons';

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
    ...FONTS.h4,
    color: 'white',
    flex: 1,
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

export const SupportButton = ({
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

      <View style={{marginRight: 10}}>
        <BaseIcon icon={icons.rightArrow} size={14} color={COLORS.white} />
      </View>

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
