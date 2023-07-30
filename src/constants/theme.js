import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('screen');
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export const CONTENT_SPACING = 15;

const SAFE_BOTTOM =
  Platform.select({
    ios: StaticSafeAreaInsets.safeAreaInsetsBottom,
  }) ?? 0;

export const COLORS = {
  primary: '#1D1B1F',
  primary_second: '#040206',
  primary_third: '#BD5FA3',
  drawer_bg: '#1F32FA',
  secondary: '#A59AFA',
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#EFF2F5',
  gray: '#8B9097',
  borderColor: '#D4D4D4',
  green: '#42D742',
  error: 'red',
  success: 'green',
};

export const SAFE_AREA_PADDING = {
  paddingLeft: StaticSafeAreaInsets.safeAreaInsetsLeft + CONTENT_SPACING,
  paddingTop: StaticSafeAreaInsets.safeAreaInsetsTop + CONTENT_SPACING,
  paddingRight: StaticSafeAreaInsets.safeAreaInsetsRight + CONTENT_SPACING,
  paddingBottom: SAFE_BOTTOM + CONTENT_SPACING,
};

export const SIZES = {
  // global sizes
  base: 10,
  font: 14,
  radius: 12,
  padding: 24,
  tabSize: 55,

  //font sizezs
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  //app diementions
  width,
  height,
};

export const FONTS = {
  h1: {
    fontSize: SIZES.h1,
    fontFamily: Platform.select({
      ios: null,
      android: 'Bold',
    }),
    lineHeight: 36,
  },
  h2: {
    fontSize: SIZES.h2,
    lineHeight: 30,
    fontFamily: Platform.select({
      ios: null,
      android: 'Bold',
    }),
  },
  h3: {
    fontSize: SIZES.h3,
    lineHeight: 22,
    fontFamily: Platform.select({
      ios: null,
      android: 'Bold',
    }),
  },
  h4: {
    fontSize: SIZES.h4,
    lineHeight: 22,
    fontFamily: Platform.select({
      ios: null,
      android: 'SemiBold',
    }),
  },

  body1: {
    fontSize: SIZES.body1,
    lineHeight: 36,
    fontFamily: Platform.select({
      ios: null,
      android: 'Regular',
    }),
  },
  body2: {
    fontSize: SIZES.body2,
    lineHeight: 30,
    fontFamily: Platform.select({
      ios: null,
      android: 'Regular',
    }),
  },
  body3: {
    fontSize: SIZES.body3,
    lineHeight: 22,
    fontFamily: Platform.select({
      ios: null,
      android: 'Regular',
    }),
  },
  body4: {
    fontSize: SIZES.body4,
    lineHeight: 22,
    fontFamily: Platform.select({
      ios: null,
      android: 'Regular',
    }),
  },
  body5: {
    fontSize: SIZES.body4,
    lineHeight: 22,
    fontFamily: Platform.select({
      ios: null,
      android: 'Regular',
    }),
  },
};

const appTheme = {COLORS, SIZES, FONTS};
export default appTheme;
