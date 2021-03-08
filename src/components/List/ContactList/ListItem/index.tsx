import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';

import {dataItem} from '../';
import {AppStyles} from '../../../../constants';

interface Props {
  onPress?: (item: dataItem) => void;
  item: ListRenderItemInfo<dataItem>;
}

export default ({item: {item, index}, onPress}: Props) => {
  const {phoneNumbers, emailAddresses} = item;
  const defaultField = {
    label:
      phoneNumbers.length > 0
        ? phoneNumbers[0].label
        : emailAddresses.length > 0
        ? emailAddresses[0].label
        : '',
    value:
      phoneNumbers.length > 0
        ? phoneNumbers[0].number
        : emailAddresses.length > 0
        ? emailAddresses[0].email
        : '',
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress && onPress(item)}
      style={{
        elevation: 1,
        shadowRadius: 10,
        shadowOpacity: 0.03,
        marginBottom: 15,
        shadowColor: AppStyles.colors.black,
        shadowOffset: {width: 0, height: -2},
      }}>
      <View style={styles.card}>
        <View style={styles.cardImageContain}>
          <Image
            source={{uri: item.thumbnailPath || 'https://picsum.photos/100'}}
            style={[StyleSheet.absoluteFill, styles.imageFill]}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <View
            style={[AppStyles.rows.row_sb, {marginLeft: 0, marginBottom: 10}]}>
            <Text
              style={
                styles.name
              }>{`${item.givenName} ${item.middleName} ${item.familyName}`}</Text>
          </View>
          <View style={[AppStyles.rows.row_sb, {marginLeft: 7}]}>
            <View style={AppStyles.rows.row_fs}>
              <Text style={styles.location}>{defaultField.label}: </Text>
              <Text style={styles.location}>{defaultField.value}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    elevation: 2,
    borderWidth: 1,
    borderRadius: 10,
    shadowRadius: 10,
    shadowOpacity: 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    justifyContent: 'flex-start',
    borderColor: AppStyles.colors.e,
    shadowOffset: {width: 0, height: 8},
    shadowColor: AppStyles.colors.black,
    backgroundColor: AppStyles.colors.white,
  },
  cardImageContain: {
    width: 59,
    height: 59,
    elevation: 1,
    borderWidth: 1,
    shadowRadius: 15,
    borderRadius: 59,
    overflow: 'hidden',
    shadowOpacity: 0.12,
    shadowOffset: {width: 0, height: 0},
    shadowColor: AppStyles.colors.black,
    borderColor: AppStyles.colors.primaryBlander,
  },
  imageFill: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 14,
    marginLeft: 5,
    lineHeight: 20,
    marginBottom: 3,
    fontWeight: '400',
    color: AppStyles.colors._41,
  },
  secondaryText: {
    fontSize: 12,
    marginLeft: 5,
    lineHeight: 16,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: AppStyles.colors.secondaryColor,
  },
  location: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: AppStyles.colors.darkerGrey,
  },
});
