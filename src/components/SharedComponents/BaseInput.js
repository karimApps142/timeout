import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {BaseIcon} from './BaseIcon';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
    // borderWidth: 1,
    // borderColor: COLORS.gray,
  },
  input: {
    ...FONTS.body4,
    flex: 1,

    height: '100%',
    color: COLORS.white,
    paddingHorizontal: 10,
  },
  iconContainer: {
    marginRight: 10,
    padding: 10,
  },
  leftIconContainer: {
    marginLeft: 10,
  },
});

export const BaseInput = ({
  otherStyles,
  inputStyles,
  isPassword,
  onPressIcon,
  leftIconSize = 18,
  icon,
  leftIcon,
  customRef,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, otherStyles]}>
      {leftIcon && (
        <View style={styles.leftIconContainer}>
          <BaseIcon icon={leftIcon} color={COLORS.gray} size={leftIconSize} />
        </View>
      )}
      <TextInput
        secureTextEntry={isPassword}
        autoCapitalize="none"
        autoCorrect={false}
        ref={customRef}
        style={[styles.input, inputStyles]}
        placeholderTextColor={COLORS.gray}
        {...otherProps}
      />
      {icon && (
        <TouchableOpacity
          onPress={onPressIcon}
          activeOpacity={1}
          style={styles.iconContainer}>
          <BaseIcon icon={icon} color={COLORS.gray} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};
