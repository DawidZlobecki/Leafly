import React, {ReactNode} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BottomNavigation} from '../BottomNavigation/BottomNavigation';
import {getColors} from '../../utils/functions/colors';

export const ScreenWrapper: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>{children}</View>
      <BottomNavigation />
    </View>
  );
};

const s = StyleSheet.create({});
