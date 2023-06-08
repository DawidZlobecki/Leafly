import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface SvgComponentProps {
  width?: number;
  height?: number;
  color?: string;
}

const ProfileIcon: React.FC<SvgComponentProps> = ({
  width = 25,
  height = 24,
  color = '#212221',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.3333 0C13.9246 0 15.4507 0.632141 16.5759 1.75736C17.7011 2.88258 18.3333 4.4087 18.3333 6C18.3333 7.5913 17.7011 9.11742 16.5759 10.2426C15.4507 11.3679 13.9246 12 12.3333 12C10.742 12 9.21583 11.3679 8.09061 10.2426C6.96539 9.11742 6.33325 7.5913 6.33325 6C6.33325 4.4087 6.96539 2.88258 8.09061 1.75736C9.21583 0.632141 10.742 0 12.3333 0ZM12.3333 15C18.9633 15 24.3333 17.685 24.3333 21V24H0.333252V21C0.333252 17.685 5.70325 15 12.3333 15Z"
        fill={color}
      />
    </Svg>
  );
};

export default ProfileIcon;
