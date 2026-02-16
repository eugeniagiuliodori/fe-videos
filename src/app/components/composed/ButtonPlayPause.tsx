import Button from '@/components/common/ui/Button';
import { ButtonPlayPauseProps } from "@/interfaces/interfaces";
import styles from "@/components/composed/styles_1/Button.module.css";
import SVGRect from '@/components/common/ui/SVGRects';
import SVGPath from '@/components/common/ui/SVGPaths';

const ButtonPlayPause: React.FC<ButtonPlayPauseProps> = ({ togglePlay, playingParent }) => {
  return (
    <Button onClick={togglePlay} className={styles.playPauseButton}>
      {playingParent ? (
        <SVGRect  className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor"
            rects={
              [
                {x:"6", y:"5", width:"3", height:"14"},
                {x:"15", y:"5", width:"3", height:"14"}
              ]
            }
        />
      ) : (
        <SVGPath  className={styles.playIcon}  viewBox="0 0 24 24" fill="currentColor"
                    paths={[{d:"M8 5v14l11-7z"}]}
        />
        
      )}
    </Button>
  );
};

export default ButtonPlayPause;
