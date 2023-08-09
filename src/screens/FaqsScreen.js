import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BaseFlatList, BaseHeader, BaseView} from '../components';
import {COLORS, FONTS} from '../constants/theme';
import {FaqCard} from '../components/SharedComponents/FaqsCard';

const faqs = [
  {
    question: 'What is the main feature of the app?',
    answer:
      "The main feature of our app is to help users track their screen time on mobile devices. Additionally, we have a friendship system where users can connect with their friends and view their friends' screen time on the home screen.",
  },
  {
    question: 'How does the friendship system work?',
    answer:
      "Our app allows users to connect with their friends through the friendship system. Once connected, users can see their friends' screen time information on the home screen, allowing them to compare and motivate each other to manage their screen time effectively.",
  },
  {
    question: 'Are there any rewards for consuming less time on mobile?',
    answer:
      'Yes, we offer rewards for users who consume less time on their mobile devices. If a user spends less time on their mobile device in a day compared to their average usage, they will receive a reward. The rewards can vary and may include in-app badges, virtual currency, or other incentives.',
  },
  {
    question: "How can I view my friends' screen time?",
    answer:
      "To view your friends' screen time, simply navigate to the home screen in the app. There, you will find a section dedicated to your connected friends, displaying their screen time information such as daily usage and progress towards goals.",
  },
];

export const FaqScreen = () => {
  return (
    <BaseView>
      <View style={styles.container}>
        <BaseHeader otherStyles={styles.header} title="Faqs" />
        <BaseFlatList
          data={faqs}
          keyExtractor={(_, index) => `key${index}`}
          renderItem={({item}) => <FaqCard item={item} />}
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
