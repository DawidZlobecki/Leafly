import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface SvgIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const NoteIcon: React.FC<SvgIconProps> = ({
  width = 24,
  height = 24,
  color = '#212221',
}) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
          d="M16 9H21.5L16 3.5V9ZM7 2H17L23 8V18C23 18.5304 22.7893 19.0391 22.4142 19.4142C22.0391 19.7893 21.5304 20 21 20H7C5.89 20 5 19.1 5 18V4C5 3.46957 5.21071 2.96086 5.58579 2.58579C5.96086 2.21071 6.46957 2 7 2ZM3 6V22H21V24H3C2.46957 24 1.96086 23.7893 1.58579 23.4142C1.21071 23.0391 1 22.5304 1 22V6H3Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default NoteIcon;
