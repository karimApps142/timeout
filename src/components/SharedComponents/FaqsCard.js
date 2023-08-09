import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BaseIcon} from './BaseIcon';
import {COLORS, FONTS} from '../../constants/theme';
import icons from '../../constants/icons';

export const FaqCard = ({item}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toggleExpand}
        style={styles.questionContainer}>
        <Text style={styles.questionText}>{item?.question}</Text>
        <BaseIcon
          icon={isExpanded ? icons.arrow_down : icons.rightArrow}
          size={12}
          color={COLORS.white}
        />
      </TouchableOpacity>
      {isExpanded && <Text style={[styles.answerText]}>{item?.answer}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.black,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionText: {
    fontWeight: 'bold',
    color: COLORS.white,
    ...FONTS.h3,
    flex: 1,
    marginRight: 20,
  },
  answerText: {
    marginTop: 5,
    ...FONTS.body4,
    color: COLORS.white,
  },
});
