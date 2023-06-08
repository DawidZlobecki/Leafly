import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface SvgComponentProps {
  width?: number;
  height?: number;
  color?: string;
}

const HeartIcon: React.FC<SvgComponentProps> = ({
  width = 21,
  height = 19,
  color = '#212221',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 19" fill="none">
      <Path
        d="M10.5 18.35L9.05 17.03C3.9 12.36 0.5 9.27 0.5 5.5C0.5 2.41 2.92 0 6 0C7.74 0 9.41 0.81 10.5 2.08C11.59 0.81 13.26 0 15 0C18.08 0 20.5 2.41 20.5 5.5C20.5 9.27 17.1 12.36 11.95 17.03L10.5 18.35Z"
        fill={color}
      />
    </Svg>
  );
};

export default HeartIcon;
