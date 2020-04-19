import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const useStyledTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};
