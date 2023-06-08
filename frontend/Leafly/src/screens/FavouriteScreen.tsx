import React from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from '../components/ScreenWrapper/ScreenWrapper';

const FavouriteScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <Text style={{color: 'red'}}>Fav!</Text>
      </View>
    </ScreenWrapper>
  );
};

export default FavouriteScreen;
