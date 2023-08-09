import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {BaseHeader, BaseIcon, BaseView, HomeCard} from '../components';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {removeFriend} from '../store/friends';

export const UserDetailScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {item, index} = route.params;
  const {loading} = useSelector(state => state.friends);

  const deleteFriend = () => {
    Alert.alert(
      'Remove Friend',
      'Are you sure you want to remove this friend?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => dispatch(removeFriend(item?.id)),
        },
      ],
    );
  };

  return (
    <BaseView overlayLoading={loading}>
      <View style={styles.container}>
        <BaseHeader otherStyles={styles.header} />
        <View style={styles.BgBlackView} />

        <View style={styles.bottomMain}>
          <HomeCard disabled={true} item={item} index={index} />
          <TouchableOpacity
            onPress={() => deleteFriend(item?.id)}
            style={styles.removeButton}
            activeOpacity={0.7}>
            <Text style={styles.btnText}>Remove Friend</Text>
            <BaseIcon
              icon={icons.close}
              color={COLORS.white}
              size={24}
              otherStyles={styles.icon}
            />
          </TouchableOpacity>
        </View>
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
  },

  removeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    borderRadius: 50,
    padding: 10,
    margin: 20,
  },
  btnText: {
    color: COLORS.white,
    ...FONTS.h4,
    fontWeight: '700',
    marginRight: 10,
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
});
