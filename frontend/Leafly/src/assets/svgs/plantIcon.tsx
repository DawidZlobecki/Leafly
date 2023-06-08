import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface SvgComponentProps {
  width?: number;
  height?: number;
  color?: string;
}

const PlantIcon: React.FC<SvgComponentProps> = ({
  width = 40,
  height = 40,
  color = 'white',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Path
        d="M3.33337 36.6667V33.3333C3.33337 33.3333 11.6667 30 20 30C28.3334 30 36.6667 33.3333 36.6667 33.3333V36.6667H3.33337ZM18.8334 15.1667C16.8334 8.66667 6.66671 10.1667 6.66671 10.1667C6.66671 10.1667 7.00004 23.1667 16.5 21.1667C15.8334 16.3333 13.3334 15 13.3334 15C18 15 18.3334 20.6667 18.3334 20.6667V28.3333C18.8334 28.3333 19.5 28.3333 20 28.3333C20.5 28.3333 21.1667 28.3333 21.6667 28.3333V21.3333C21.6667 21.3333 21.6667 14.8333 26.6667 13.1667C26.6667 13.1667 23.3334 18.1667 23.3334 21.5C35 22.6667 35 6.66667 35 6.66667C35 6.66667 20.1667 5.00001 18.8334 15.1667Z"
        fill={color}
      />
    </Svg>
  );
};

export default PlantIcon;
