import React from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from '../components/ScreenWrapper/ScreenWrapper';

const ScanPlantsScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <Text>Scan!</Text>
      </View>
    </ScreenWrapper>
  );
};

export default ScanPlantsScreen;
