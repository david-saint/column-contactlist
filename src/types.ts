import {dataItem as ContactType} from './components/List/ContactList';

export type RootStackParamList = {
  Home: undefined;
  Contacts: undefined;
  ContactProfile: {
    details: ContactType;
    name: string;
  };
};
