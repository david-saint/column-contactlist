import * as React from 'react';
import {
  View,
  Text,
  Alert,
  Linking,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {Button} from 'react-native-paper';
import Contacts from 'react-native-contacts';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import {RootStackParamList} from '../../types';
import {requestContactReadPermission} from '../../utils';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const getAllContacts = async () => {
    setLoading(true);
    if (Platform.OS === 'android') {
      const granted = await requestContactReadPermission();
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Permission Issues',
          'You have to grant this app permission from the settings',
          [
            {
              text: 'Open Settings',
              onPress: () => Linking.openSettings(),
            },
          ],
          {cancelable: true},
        );
        setLoading(false);
        return;
      }
    }

    const contacts = await Contacts.getAll();
    console.log('contacts', contacts);
    try {
      await AsyncStorage.setItem('@cached_contacts', JSON.stringify(contacts));
      navigation.navigate('Contacts');
    } catch (e) {
      Alert.alert(
        'Something Went wrong',
        'An unexpected error occured when saving the contacts.',
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Button mode="contained" loading={loading} onPress={getAllContacts}>
        Load/Update Contacts
      </Button>
    </View>
  );
};

export default HomeScreen;
