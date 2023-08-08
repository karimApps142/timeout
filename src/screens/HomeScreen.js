import React, {useCallback, useEffect} from 'react';
import {View, StyleSheet, RefreshControl} from 'react-native';
import {
  BaseFlatList,
  BaseHeader,
  BaseView,
  DataNotFound,
  HomeCard,
  HomeFooter,
  LoadingListIndicator,
} from '../components';
import {COLORS, SIZES} from '../constants/theme';
import {useDispatch, useSelector} from 'react-redux';
import usePagination, {PAGINATION_MODE} from '../hooks/usePagination';
import {setUsers} from '../store/home';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    loading: serverLoading,
    users,
    next_page,
    pagination,
  } = useSelector(state => state.home);

  const {
    getPaginationData,
    state: {loading, loadMore, refreshing},
  } = usePagination();

  const getHomeData = useCallback(
    (paginationModeState, data) => {
      getPaginationData({
        ...paginationModeState,
        next_page,
        url: 'getFriendsScreenTime',
        param: data,
        onSuccess: payload => dispatch(setUsers(payload)),
      });
    },
    [dispatch, next_page, getPaginationData],
  );

  useEffect(() => {
    getHomeData(PAGINATION_MODE.loading);
  }, []);

  const handleRefresh = () => {
    getHomeData(PAGINATION_MODE.refreshing);
  };

  const handleLoadMore = () => {
    if (pagination && !loadMore) {
      getHomeData(PAGINATION_MODE.loadMore);
    }
  };

  return (
    <BaseView loading={loading} overlayLoading={serverLoading}>
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
          data={users}
          keyExtractor={(_, index) => `key${index}`}
          renderItem={({item, index}) => (
            <HomeCard
              onPress={() => navigation.navigate('userDetailScreen')}
              item={item}
              index={index}
            />
          )}
          contentContainerStyle={styles.flatList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          onEndReached={handleLoadMore}
          ListFooterComponent={<LoadingListIndicator loading={loadMore} />}
          ListEmptyComponent={<DataNotFound title="No data found!" />}
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
