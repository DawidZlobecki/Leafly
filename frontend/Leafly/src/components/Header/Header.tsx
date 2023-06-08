import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';

const {width, height} = Dimensions.get('window');
const Header = () => {
  const ellipseHeight = height * 0.3; // 30% of screen height
  return (
    <View style={s.container}>
      <Svg width={width} height={ellipseHeight}>
        <Ellipse
          cx={width / 2} // Center of the ellipse horizontally
          cy={ellipseHeight} // Bottom of the ellipse vertically
          rx={width / 2} // Half of the width (radius) of the ellipse
          ry={ellipseHeight / 2} // Half of the height (radius) of the ellipse
          fill="blue" // Set your desired background color
        />
      </Svg>
    </View>
  );
};

export default Header;

const s = StyleSheet.create({
  container: {
    width: '150%',
    overflow: 'hidden',
  },
});
