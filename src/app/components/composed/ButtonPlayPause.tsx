//import Button from '@/components/common/ui/Button';
import IconButton  from "@/components/common/ui/IconButton";
import { ButtonPlayPauseProps } from "@/types/interfaces";
import muiStyles from "@/components/composed/styles/Button/mui.module.css";
import styles from "@/components/composed/styles/Button/button.module.css";
import clsx from 'clsx';
import SVGRect from '@/components/common/ui/SVGRects';
import SVGPath from '@/components/common/ui/SVGPaths';

const ButtonPlayPause: React.FC<ButtonPlayPauseProps> = ({ togglePlay, playingParent, disabled }) => {
  const composedClassName = clsx(muiStyles, styles.pmuiplayIcon);
  return (
    <IconButton disabled={disabled} onClick={togglePlay} className={muiStyles.pmuiplayPauseButton}>
      {playingParent ? (
        <SVGRect  className={composedClassName} viewBox="0 0 24 24" fill="currentColor"
            rects={
              [
                {x:"6", y:"5", width:"3", height:"14"},
                {x:"15", y:"5", width:"3", height:"14"}
              ]
            }
        />
      ) : (
        <SVGPath  className={composedClassName}  viewBox="0 0 24 24" fill="currentColor"
                    paths={[{d:"M8 5v14l11-7z"}]}
        />
        
      )}
    </IconButton>
  );
};

export default ButtonPlayPause;
