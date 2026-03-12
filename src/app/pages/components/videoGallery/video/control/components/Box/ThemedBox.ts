import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

// ThemedBox con BoxProps permite que "component" sea de HTMLDivElement u otro
export const ThemedBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));
