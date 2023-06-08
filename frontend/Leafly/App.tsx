import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  FavouriteScreen,
  HomeScreen,
  ScanScreen,
  NotesScreen,
  ProfileScreen,
} from './src/screens';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import plTranslation from './src/locales/pl.json';
import 'intl';
import 'intl-pluralrules';

export type RootStackParamList = {
  Home: undefined;
  Favourite: undefined;
  Details: undefined;
  Scan: undefined;
  Notes: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  i18n.use(initReactI18next).init({
    lng: 'pl',
    resources: {
      pl: {translation: plTranslation},
    },
  });

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Favourite" component={FavouriteScreen} />
          <Stack.Screen name="Scan" component={ScanScreen} />
          <Stack.Screen name="Notes" component={NotesScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
};

export default App;
