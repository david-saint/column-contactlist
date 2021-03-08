import * as React from 'react';
import {View, Text, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import {RootStackParamList} from '../../types';
import ContactList, {
  dataItem as ContactDataType,
} from '../../components/List/ContactList';

interface ContactsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Contacts'>;
}

const ContactsScreen: React.FC<ContactsScreenProps> = ({navigation}) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [contacts, setContacts] = React.useState<ContactDataType[]>([]);

  React.useEffect(() => {
    AsyncStorage.getItem('@cached_contacts')
      .then((response) => JSON.parse(response || '[]'))
      .then((c) => setContacts(c))
      .catch(() =>
        Alert.alert(
          'Something Went wrong',
          'An unexpected error occured when trying to get the saved contacts.',
        ),
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ContactList
          data={contacts}
          onUserSelect={(user) =>
            navigation.navigate('ContactProfile', {
              details: user,
              name: `${user.givenName} ${user.familyName}`,
            })
          }
          keyExtractor={(item: ContactDataType) => item.recordID}
        />
      )}
    </View>
  );
};

export default ContactsScreen;
