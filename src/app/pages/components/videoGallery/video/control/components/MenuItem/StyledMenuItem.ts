import { styled } from '@mui/material/styles';
import { alpha } from "@mui/material/styles";
import MnItem from "@/components/common/ui/MenuItem";
import { Theme } from '@mui/material/styles';
import MenuItem from '@/components/common/ui/MenuItem';


const getBgStart = (theme:Theme) => theme.palette.secondary.light ?? '#ffffff';
const getBgEnd = (theme:Theme) => theme.palette.secondary.dark ?? '#ffffff';

const getBgStartOverlay = (theme:Theme) => theme.palette.secondaryExtra?.bgStartGradientHover ?? '#ffffff';
const getBgEndOverlay = (theme:Theme) => theme.palette.secondaryExtra?.bgEndGradientHover ?? '#ffffff';

export const StyledMenuItem = styled(MnItem)(({ theme }) => ({
  position: 'relative',      
  backgroundImage: `linear-gradient(
    90deg, 
    ${theme.palette.secondaryExtra?.bgStartGradientHover}, 
    ${theme.palette.secondaryExtra?.bgEndGradientHover}
  )`,
  color: 'white',
  fontWeight: 700,

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    
    background: `linear-gradient(
        ${alpha(getBgStartOverlay(theme), 0.002)},
        ${alpha(getBgEndOverlay(theme), 0.002)}
      )`,
    opacity: 0,
    transition: 'opacity 200ms ease',
    pointerEvents: 'none',
  },

  '&:hover::after': {
    opacity: 0.005,
  },
}));


// Componente más general (sin overlay)
export const PlaybackRateMn = styled(MenuItem)(({ theme }) => ({
   backgroundImage: `linear-gradient(
    90deg, 
    ${theme.palette.secondaryExtra?.bgStartGradientHover}, 
    ${theme.palette.secondaryExtra?.bgEndGradientHover}
  )`,
}));


