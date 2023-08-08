import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

export const BaseView = ({
  loading,
  IndicatorSize = 'large',
  overlayLoading,
  children,
  flex = 1,
}) => {
  if (loading) {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator
          animating={loading}
          color={COLORS.white}
          size={IndicatorSize}
        />
      </View>
    );
  }

  return (
    <View style={[{flex: flex, backgroundColor: COLORS.white}]}>
      {overlayLoading && (
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <Text style={styles.overlayText}>Loading...</Text>
            <ActivityIndicator
              animating={overlayLoading}
              color={COLORS.white}
              size="large"
            />
          </View>
        </View>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  },
  overlayContent: {
    backgroundColor: COLORS.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlayText: {
    ...FONTS.h4,
    color: COLORS.white,
    marginRight: 5,
  },
});
