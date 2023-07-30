import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

export const BaseView = ({
  styles,
  loading,
  IndicatorSize = 'large',
  overlayLoading,
  children,
  flex = 1,
  otherStyles,
}) => {
  if (loading) {
    return (
      <View
        style={[
          {
            flex: 1,
            paddingTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
          },
          otherStyles,
        ]}>
        <ActivityIndicator
          animating={loading}
          color={COLORS.primary}
          size={IndicatorSize}
        />
      </View>
    );
  }

  return (
    <View style={[{flex: flex, backgroundColor: COLORS.white}, styles]}>
      {overlayLoading && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 999,
          }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.h4, marginRight: 5}}>Loading...</Text>
            <ActivityIndicator
              animating={overlayLoading}
              color={COLORS.primary}
              size="large"
            />
          </View>
        </View>
      )}
      {children}
    </View>
  );
};
