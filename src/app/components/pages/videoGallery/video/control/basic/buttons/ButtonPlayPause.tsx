import Button from '@/components/common/ui/Button';
import { ButtonPlayPauseProps } from "@/interfaces/interfaces";
import styles from "../../Control.module.css";

const ButtonPlayPause: React.FC<ButtonPlayPauseProps> = ({ togglePlay, playingParent }) => {
  return (
    <Button onClick={togglePlay} className={styles.playPauseButton}>
      {playingParent ? (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="5" width="3" height="14" />
          <rect x="15" y="5" width="3" height="14" />
        </svg>
      ) : (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </Button>
  );
};

export default ButtonPlayPause;
