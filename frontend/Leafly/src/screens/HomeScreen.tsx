import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScreenWrapper} from '../components/ScreenWrapper/ScreenWrapper';
import Header from '../components/Header/Header';

const HomeScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <Header />
    </ScreenWrapper>
  );
};

export default HomeScreen;

const s = StyleSheet.create({
  mainContainer: {flex: 1},
});
