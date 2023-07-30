import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  BaseButton,
  BaseFlatList,
  BaseHeader,
  BaseInput,
  BaseView,
  HomeCard,
  HomeFooter,
} from '../components';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';

export const HomeScreen = ({navigation}) => {
  const data = [{}, {}, {}];

  return (
    <BaseView>
      <View style={styles.container}>
        <BaseHeader
          onPressAdd={() => navigation.navigate('addFriendsScreen')}
          onPressSetting={() => navigation.navigate('profileSettingScreen')}
          otherStyles={styles.header}
          isBack={false}
          isHomeHeader={true}
        />
        {/* Background style view */}
        <View style={styles.BgBlackView} />

        <BaseFlatList
          data={data}
          renderItem={() => (
            <HomeCard onPress={() => navigation.navigate('userDetailScreen')} />
          )}
          contentContainerStyle={styles.flatList}
        />
      </View>

      <HomeFooter />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary_second,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    backgroundColor: 'rgba(30, 29, 31, 1)',
    flex: 1,
  },
  BgBlackView: {
    position: 'absolute',
    top: '-20%',
    height: SIZES.height * 2,
    width: 100,
    backgroundColor: COLORS.primary_second,
    transform: [{translateX: -50}, {translateY: -50}, {rotate: '45deg'}],
    zIndex: -100,
  },
  bottomMain: {
    padding: 15,
    marginTop: 100,
  },
  flatList: {
    padding: 10,
  },
});
