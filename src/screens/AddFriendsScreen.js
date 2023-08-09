/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {getSearchData} from '../store/friends';
import helper from '../constants/helper';

export const AddFriendsScreen = () => {
  const dispatch = useDispatch();
  const {loading, overlayLoading, friendRequests, searchData} = useSelector(
    state => state.friends,
  );

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getSearchData());
  }, []);

  const onPressSearch = useCallback(() => {
    dispatch(
      getSearchData({
        username: search,
      }),
    );
  }, [dispatch, search]);

  return (
    <BaseView overlayLoading={loading || overlayLoading}>
      <View style={styles.container}>
        <BaseHeader otherStyles={styles.header} title="Add Friends" />

        <BaseFlatList
          contentContainerStyle={styles.bottomMain}
          ListHeaderComponent={
            <>
              <BaseButton
                onPress={() => helper.inviteFriends()}
                title={'Invite Friends '}
              />
              <BaseSearch
                value={search}
                onChangeText={setSearch}
                onPressSearch={onPressSearch}
              />

              {Object.keys(friendRequests).length > 0 ? (
                <Text style={[styles.headings]}>Accept Request</Text>
              ) : null}

              <BaseFlatList
                data={friendRequests}
                renderItem={({item}) => <UserCard friendRequest item={item} />}
              />
              {Object.keys(searchData).length > 0 ? (
                <Text style={styles.headings}>Add New</Text>
              ) : null}
            </>
          }
          data={searchData}
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
    marginVertical: 5,
  },
});
