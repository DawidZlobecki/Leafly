import React from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from '../components/ScreenWrapper/ScreenWrapper';

const ProfileScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <Text>Prof!</Text>
      </View>
    </ScreenWrapper>
  );
};

export default ProfileScreen;
