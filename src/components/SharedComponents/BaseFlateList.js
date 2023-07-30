import React from 'react';
import {FlatList} from 'react-native';

export const BaseFlatList = ({
  ListFooterComponent,
  ListFooterComponentStyle,
  ListHeaderComponentStyle,
  ListHeaderComponent,
  keyExtractor,
  data,
  contentContainerStyle,
  horizontal,
  renderItem,
  showsVerticalScrollIndicator = true,
  showsHorizontalScrollIndicator = false,
  numColumns,
  refreshControl,
  ...otherProps
}) => {
  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      contentContainerStyle={contentContainerStyle}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      horizontal={horizontal}
      ListHeaderComponent={ListHeaderComponent}
      ListHeaderComponentStyle={ListHeaderComponentStyle}
      ListFooterComponent={ListFooterComponent}
      ListFooterComponentStyle={ListFooterComponentStyle}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={refreshControl}
      {...otherProps}
    />
  );
};
