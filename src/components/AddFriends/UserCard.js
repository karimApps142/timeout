import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {BaseIcon} from '../SharedComponents/BaseIcon';
import icons from '../../constants/icons';

const UserCard = ({item, onPress, friendRequest, disabled = false}) => {
  return (
    <View style={styles.card}>
      <Image source={icons.emoji} style={styles.emoji} />
      <View style={styles.userDetails}>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.username}>@{item?.username}</Text>
      </View>
      <TouchableOpacity
        style={styles.acceptButton}
        disabled={disabled}
        onPress={onPress}>
        <Text style={styles.acceptText}>
          {friendRequest ? 'Accept' : 'Add'}
        </Text>
        <BaseIcon icon={icons.accept} color={COLORS.white} size={14} />
      </TouchableOpacity>
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
