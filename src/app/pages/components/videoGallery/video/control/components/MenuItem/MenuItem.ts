import { styled } from '@mui/material/styles';
import { alpha } from "@mui/material/styles";
import MnItem from "@/components/common/ui/MenuItem";
import { Theme } from '@mui/material/styles';


const getBgStart = (theme:Theme) => theme.palette2.lightMain ?? '#ffffff';
const getBgEnd = (theme:Theme) => theme.palette2.middleLightMain ?? '#ffffff';

const getBgStartOverlay = (theme:Theme) => theme.palette2.bglightMainHover ?? '#ffffff';
const getBgEndOverlay = (theme:Theme) => theme.palette2.bgmiddleLightMainHover ?? '#ffffff';

export const MenuItem = styled(MnItem)(({ theme }) => ({
  position: 'relative',      
   backgroundImage: `linear-gradient(
        90deg,
        ${alpha(getBgStart(theme), 0.05)},
        ${alpha(getBgEnd(theme), 0.05)}
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
    ${theme.palette2.lightMain}, 
    ${theme.palette2.middleLightMain}
  )`,
}));