export const colors = {
  primary: '#95C789',
  primary_60: '#68BA72',
  secondary: '#B9925B',
  darkGray: '#46484A',
  lightGray: '#E8EDEC',
  gray: '#707070',
  white: '#fffffa',
  black: '#000',
  red: '#a60000',
};

export const getColors = (colorName: keyof typeof colors) => {
  return colors[colorName];
};
