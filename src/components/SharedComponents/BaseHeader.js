import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {BaseIcon} from './BaseIcon';
import icons from '../../constants/icons';

export const BaseHeader = ({
  backIconColor = COLORS.white,
  height = 90,
  backTitle = 'Back',
  title = 'User Info',
  onPressBack,
  isBack = true,
  isHomeHeader = false,
  otherStyles,
  onPressAdd,
  onPressSetting,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          height,
          paddingTop:
            Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 40,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.base,
          zIndex: 2,
          position: 'relative',
          backgroundColor: 'transparent',
        },
        otherStyles,
      ]}>
      {isBack ? (
        <>
          {/* Back */}
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            activeOpacity={0.7}
            onPress={() => {
              Keyboard.dismiss();
              onPressBack
                ? onPressBack()
                : navigation.canGoBack()
                ? navigation.goBack()
                : null;
            }}>
            <BaseIcon icon={icons.back} color={backIconColor} size={20} />
          </TouchableOpacity>

          {/* LeftTitle */}
          <Text style={{color: COLORS.lightGray, ...FONTS.body5}}>
            {backTitle}
          </Text>
          {/* Screen title */}
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
              height: '100%',
              zIndex: -10,

              // backgroundColor: 'red',
            }}>
            <Text
              style={{
                color: COLORS.lightGray,
                ...FONTS.h3,
                fontWeight: '700',
                marginLeft: 10,
              }}>
              {title}
            </Text>
          </View>
        </>
      ) : null}

      {isHomeHeader ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            {/* left Side */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={onPressSetting} activeOpacity={0.7}>
                <BaseIcon
                  icon={icons.setting}
                  color={COLORS.secondary}
                  size={33}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onPressAdd}
                style={{marginLeft: 15}}
                activeOpacity={0.7}>
                <BaseIcon icon={icons.add} color={COLORS.secondary} size={40} />
              </TouchableOpacity>
            </View>

            {/* Right Side */}
            <Text
              style={{
                color: COLORS.secondary,
                ...FONTS.h1,
                fontWeight: '700',
              }}>
              2h 45m
            </Text>
          </View>
        </>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
