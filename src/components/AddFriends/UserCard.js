import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {BaseIcon} from '../SharedComponents/BaseIcon';
import icons from '../../constants/icons';
import {useDispatch} from 'react-redux';
import {friendRequestAccept, friendRequestSend} from '../../store/friends';

const UserCard = ({item, friendRequest}) => {
  const dispatch = useDispatch();

  const user = friendRequest ? item?.user : item;

  return (
    <View style={styles.card}>
      <Image source={icons.emoji} style={styles.emoji} />
      <View style={styles.userDetails}>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.username}>@{user?.username}</Text>
      </View>
      {!user?.isFriend ? (
        <TouchableOpacity
          style={styles.acceptButton}
          disabled={user?.to}
          onPress={() => {
            if (friendRequest) {
              dispatch(friendRequestAccept(item?.id));
            } else {
              dispatch(friendRequestSend({friend_id: item?.id}));
            }
          }}>
          <Text style={styles.acceptText}>
            {friendRequest
              ? 'Accept'
              : user?.from
              ? 'Accept'
              : user?.to
              ? 'Sent'
              : 'Add'}
          </Text>
          {!user?.to ? (
            <BaseIcon icon={icons.accept} color={COLORS.white} size={14} />
          ) : null}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    padding: 10,
    borderRadius: 15,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emoji: {
    height: 40,
    width: 40,
  },
  userDetails: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
  },
  name: {
    color: COLORS.white,
    ...FONTS.h4,
    fontWeight: '700',
  },
  username: {
    color: COLORS.lightGray,
    ...FONTS.body5,
    lineHeight: 12,
    fontSize: 10,
  },
  acceptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 2,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  acceptText: {
    color: COLORS.white,
    ...FONTS.body5,
    marginRight: 5,
  },
});

export {UserCard};
