import React from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from '../components/ScreenWrapper/ScreenWrapper';

const NotesScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <Text>Notes!</Text>
      </View>
    </ScreenWrapper>
  );
};

export default NotesScreen;
