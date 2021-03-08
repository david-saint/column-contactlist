import * as React from 'react';
import {View, Text, Alert} from 'react-native';
import {Avatar, Title, Paragraph} from 'react-native-paper';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import styles from './styles';
import {RootStackParamList} from '../../types';
import ContactList, {
  dataItem as ContactDataType,
} from '../../components/List/ContactList';

interface ContactsScreenProps {
  route: RouteProp<RootStackParamList, 'ContactProfile'>;
  navigation: StackNavigationProp<RootStackParamList, 'ContactProfile'>;
}

const ContactProfileScreen: React.FC<ContactsScreenProps> = ({
  route,
  navigation,
}) => {
  const {details: user} = route.params;
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <Avatar.Image
          size={100}
          source={{uri: user.thumbnailPath || 'https://picsum.photos/100'}}
        />
      </View>
      <View style={{marginBottom: 15}}>
        <Title>
          {user.givenName} {user.middleName} {user.familyName}
        </Title>
      </View>
      <View style={{marginVertical: 10}}>
        {user.phoneNumbers.map((phoneNumber) => (
          <Paragraph key={`phone-${phoneNumber.number}`}>
            {phoneNumber.label}: {phoneNumber.number}
          </Paragraph>
        ))}
        {user.emailAddresses.map((emailAddress) => (
          <Paragraph key={`email-${emailAddress.id}`}>
            {emailAddress.label}: {emailAddress.email}
          </Paragraph>
        ))}
      </View>
    </View>
  );
};

export default ContactProfileScreen;
