import {PermissionsAndroid} from 'react-native';

export const requestContactReadPermission = async () => {
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Accept',
    },
  );
};
