import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import {RootStackParamList} from '../types';
import {ContactsScreen, ContactProfileScreen} from '../screens/Contacts';

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Contacts" component={ContactsScreen} />
      <RootStack.Screen
        name="ContactProfile"
        component={ContactProfileScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </RootStack.Navigator>
  );
}
