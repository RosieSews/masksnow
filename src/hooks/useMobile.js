import { useTheme, useMediaQuery } from '@material-ui/core';
import { useStyledTheme } from './useStyledTheme';

export const useMobile = () => {
  const theme = useTheme();
  return !useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
};
