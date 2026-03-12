import IconButton  from "@/components/common/ui/IconButton";
import { ButtonMuteProps } from "@/types/interfaces";
import muiStyles from "@/components/composed/styles/Button/mui.module.css";
import styles from "@/components/composed/styles/Button/button.module.css";
import clsx from 'clsx';
import SVG from '@/components/common/ui/SVGPaths';

const ButtonMute: React.FC<ButtonMuteProps> = ({ toggleMute, muted, volume, disabled }) => {
  const composedClassName = clsx(muiStyles, muiStyles.pmuimuteButton);
  return (
    <IconButton
    
      onClick={toggleMute}
      className={composedClassName}
      aria-label={muted ? "Unmute" : "Mute"}
      disabled={disabled}
    >
      {muted || volume === 0 ? (
        <SVG  className={styles.pmuimuteIcon} viewBox="0 0 24 24" fill="currentColor"
            paths={[{d:"M16.5 12a4.5 4.5 0 01-4.5 4.5v-9A4.5 4.5 0 0116.5 12zM19 12c0-1.77-.77-3.36-1.98-4.47l-1.42 1.42A3 3 0 0017 12c0 1.1-.45 2.1-1.17 2.82l1.42 1.42C18.23 15.36 19 13.77 19 12z"}]}
        />
      ) : (
        <SVG  className={styles.pmuimuteIcon}  
              viewBox="0 0 24 24" 
              fill="currentColor"
              paths={[{d:"M5 9v6h4l5 5V4L9 9H5z"}]}
        />
      )}
    </IconButton>
  );
};

export default ButtonMute;
