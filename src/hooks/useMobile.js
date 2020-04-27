import { useTheme, useMediaQuery } from '@material-ui/core';

export const useMobile = () => {
  const theme = useTheme();
  return !useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
};
