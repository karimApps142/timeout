import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import icons from '../../constants/icons';
import {BaseButton} from './BaseButton';
import {BaseInput} from './BaseInput';
import {COLORS} from '../../constants/theme';

const BaseSearch = ({
  onChangeText,
  value,
  otherStyles,
  loading,
  onPressSearch,
}) => {
  return (
    <View style={[styles.container, otherStyles]}>
      <BaseButton
        onPress={onPressSearch}
        otherStyles={styles.button}
        loading={loading}
        icon={icons.search}
        leftIconStyles={styles.buttonIcon}
      />
      <BaseInput
        placeholder="Search friends..."
        onChangeText={onChangeText}
        otherStyles={styles.input}
        value={value}
        onSubmitEditing={onPressSearch}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginTop: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  input: {
    borderRadius: 0,
    height: 45,
    marginTop: 0,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
  },
  button: {
    borderRadius: 2,
    width: 60,
    height: 44,
    marginTop: 0,
    borderRightColor: COLORS.primary_second,
    borderRightWidth: 1,
  },
  buttonIcon: {
    paddingVertical: 'auto',
  },
});

export {BaseSearch};
