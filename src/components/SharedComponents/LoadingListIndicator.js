/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLORS} from '../../constants/theme';

export const LoadingListIndicator = ({loading}) => {
  return (
    <View
      style={{height: 40, alignContent: 'center', justifyContent: 'center'}}>
      {loading && <ActivityIndicator color={COLORS.white} />}
    </View>
  );
};
