import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  BaseFlatList,
  BaseHeader,
  BaseView,
  HomeCard,
  HomeFooter,
} from '../components';
import {COLORS, SIZES} from '../constants/theme';

export const HomeScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      name: 'Alice Johnson',
      username: 'alicejohnson',
      screen_time: '4h 35m',
    },
    {id: 2, name: 'Bob Lee', username: 'boblee', screen_time: '2h 18m'},
    {
      id: 3,
      name: 'Charlie Brown',
      username: 'charliebrown',
      screen_time: '7h 42m',
    },
    {id: 4, name: 'David Kim', username: 'davidkim', screen_time: '1h 59m'},
    {id: 5, name: 'Emily Chen', username: 'emilychen', screen_time: '5h 12m'},
    {
      id: 6,
      name: 'Frank Miller',
      username: 'frankmiller',
      screen_time: '3h 27m',
    },
    {id: 7, name: 'Grace Lee', username: 'gracelee', screen_time: '6h 51m'},
    {id: 8, name: 'Henry Park', username: 'henrypark', screen_time: '8h 03m'},
    {
      id: 9,
      name: 'Isabella Garcia',
      username: 'isabellagarcia',
      screen_time: '9h 47m',
    },
    {
      id: 10,
      name: 'Jack Johnson',
      username: 'jackjohnson',
      screen_time: '2h 59m',
    },
  ];

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
        <View style={styles.BgBlackView} />

        <BaseFlatList
          data={data}
          renderItem={({item}) => (
            <HomeCard
              onPress={() => navigation.navigate('userDetailScreen')}
              item={item}
            />
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
    paddingHorizontal: 15,
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
    paddingBottom: 120,
  },
});
