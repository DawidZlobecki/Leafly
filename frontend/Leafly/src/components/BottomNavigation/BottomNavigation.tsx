import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import NavigationItem from './NavigationItem';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {
  CameraIcon,
  HeartIcon,
  NoteIcon,
  PlantIcon,
  UserIcon,
} from '../../assets/svgs';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import {getColors} from '../../utils/functions/colors';

export const BottomNavigation: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <>
      <View style={s.mainContainer}>
        {[
          {
            icon: <NoteIcon />,
            navigateTo: () => {
              navigation.navigate('Notes');
            },
            name: t('bottomNavigation.notes'),
          },
          {
            icon: <CameraIcon />,
            navigateTo: () => {
              navigation.navigate('Scan');
            },
            name: t('bottomNavigation.scan'),
          },
          {
            icon: (
              <View style={s.plantIconContainer}>
                <PlantIcon />
              </View>
            ),
            navigateTo: () => {
              navigation.navigate('Home');
            },
          },
          {
            icon: <HeartIcon />,
            navigateTo: () => {
              navigation.navigate('Favourite');
            },
            name: t('bottomNavigation.favourites'),
          },
          {
            icon: <UserIcon />,
            navigateTo: () => {
              navigation.navigate('Profile');
            },
            name: t('bottomNavigation.profile'),
          },
        ].map((item, index) => (
          <NavigationItem
            key={index}
            image={item.icon}
            name={item.name}
            navigateTo={item.navigateTo}
          />
        ))}
      </View>
    </>
  );
};

const s = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 0.5,
  },
  plantIconContainer: {
    backgroundColor: getColors('primary_60'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
  },
});
