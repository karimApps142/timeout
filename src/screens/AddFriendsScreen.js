import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  BaseButton,
  BaseFlatList,
  BaseHeader,
  BaseSearch,
  BaseView,
  UserCard,
} from '../components';
import {COLORS, FONTS} from '../constants/theme';

export const AddFriendsScreen = () => {
  const requestsData = [
    {id: 1, name: 'John Smith', username: 'johnsmith'},
    {id: 2, name: 'Jane Doe', username: 'janedoe'},
  ];

  const data = [
    {id: 1, name: 'Alice Johnson', username: 'alicejohnson'},
    {id: 2, name: 'Bob Lee', username: 'boblee'},
    {id: 3, name: 'Charlie Brown', username: 'charliebrown'},
    {id: 4, name: 'David Kim', username: 'davidkim'},
    {id: 5, name: 'Emily Chen', username: 'emilychen'},
  ];
  return (
    <BaseView>
      <View style={styles.container}>
        <BaseHeader otherStyles={styles.header} title="Add Friends" />

        <BaseFlatList
          contentContainerStyle={styles.bottomMain}
          ListHeaderComponent={
            <>
              <BaseButton title={'Invite Friends '} />
              <BaseSearch />

              <Text style={[styles.headings, {marginTop: 10}]}>
                Accept Request
              </Text>

              <BaseFlatList
                data={requestsData}
                renderItem={({item}) => <UserCard friendRequest item={item} />}
              />
              <Text style={styles.headings}>Add New</Text>
            </>
          }
          data={data}
          renderItem={({item}) => <UserCard item={item} />}
        />
      </View>
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
    backgroundColor: COLORS.primary_second,

    flex: 1,
  },
  bottomMain: {
    padding: 15,
    paddingTop: 0,
  },
  headings: {
    color: COLORS.gray,
    ...FONTS.h4,
  },
});
