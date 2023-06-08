import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface NavigationItemProps {
  image: React.ReactElement;
  navigateTo: (navigation: any) => void;
  name?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  image,
  navigateTo,
  name = '',
}) => {
  return (
    <TouchableOpacity onPress={navigateTo} style={s.mainContainer}>
      {image}
      <Text style={s.label}>{name}</Text>
    </TouchableOpacity>
  );
};

export default NavigationItem;

const s = StyleSheet.create({
  mainContainer: {
    height: 75,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#000',
  },
});
