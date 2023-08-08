import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {BaseIcon} from '../SharedComponents/BaseIcon';
import icons from '../../constants/icons';
import helper from '../../constants/helper';

const HomeCard = ({onPress, item, index, disabled = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={styles.card}>
      {/* <BaseIcon icon={icons.arrow_up} color={COLORS.green} size={12} /> */}
      <Text style={styles.count}>{index + 1}</Text>
      <Image
        source={helper.emojis[item?.user?.avatar - 1]}
        style={styles.emoji}
      />
      <View style={styles.userDetails}>
        <Text style={styles.name}>{item?.user?.name}</Text>
        <Text style={styles.username}>{item?.user?.username}</Text>
      </View>
      <Text style={styles.time}>
        {helper.convertMinutesToHourMinuteFormat(item?.total_time)}
      </Text>
      <BaseIcon icon={icons.clock} color={COLORS.white} size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(60, 60, 60, 0.8)',
    padding: 15,
    borderRadius: 15,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  count: {
    ...FONTS.body5,
    color: COLORS.white,
    marginLeft: 2,
    fontWeight: '700',
  },
  emoji: {
    height: 40,
    width: 40,
    marginLeft: 10,
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
  time: {
    color: COLORS.white,
    ...FONTS.h2,
    fontWeight: '700',
    marginRight: 2,
  },
});

export {HomeCard};
