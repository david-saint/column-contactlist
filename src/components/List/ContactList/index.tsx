import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import ListItem from './ListItem';

type phoneNumberField = {
  label: string;
  number: string;
};

type emailAddressField = {
  id: string;
  label: string;
  email: string;
};

export type dataItem = {
  recordID: number;
  givenName: string;
  middleName: string;
  familyName: string;
  thumbnailPath: string;
  phoneNumbers: Array<phoneNumberField>;
  emailAddresses: Array<emailAddressField>;
};

interface IUserListProps {
  data: Array<dataItem>;
  horizontal?: boolean;
  snapInterval?: number;
  itemSize?: number;
  selectable?: boolean;
  keyExtractor: (item: dataItem) => any;
  onViewableItemsChanged?: (items: {viewableItems: any; changed: any}) => void;
  onUserSelect?: (item: dataItem) => void;
}

const _renderUserItem = (
  item: ListRenderItemInfo<dataItem>,
  onItemClick?: (item: dataItem) => void,
) => <ListItem item={item} onPress={onItemClick} />;

export default (props: IUserListProps) => {
  const {
    data,
    itemSize,
    horizontal,
    selectable,
    snapInterval,
    keyExtractor,
    onUserSelect,
    onViewableItemsChanged,
  } = props;

  return (
    <FlatList
      data={data}
      horizontal={horizontal}
      decelerationRate="fast"
      snapToAlignment="center"
      snapToInterval={snapInterval}
      style={{paddingVertical: 20, width: '100%'}}
      keyExtractor={(item) => keyExtractor(item)}
      showsHorizontalScrollIndicator={false}
      renderItem={(item) => _renderUserItem(item, onUserSelect)}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{itemVisiblePercentThreshold: 90}}
    />
  );
};
