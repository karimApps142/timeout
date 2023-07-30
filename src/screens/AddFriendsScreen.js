import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  BaseButton,
  BaseFlatList,
  BaseHeader,
  BaseIcon,
  BaseSearch,
  BaseView,
  HomeCard,
  UserCard,
} from '../components';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';

export const AddFriendsScreen = () => {
  const requestsData = [{}, {}];
  const data = [{}, {}, {}, {}, {}];
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

              {/* Accept Request */}
              <Text style={[styles.headings, {marginTop: 10}]}>
                Accept Request
              </Text>

              <BaseFlatList
                data={requestsData}
                renderItem={() => <UserCard />}
              />
              {/* Add New */}
              <Text style={styles.headings}>Add New</Text>
            </>
          }
          data={data}
          renderItem={() => <UserCard />}
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
