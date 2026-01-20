import Button from '@/components/common/ui/Button';
import styles from "../../Control.module.css";
import {ButtonProps} from '@/components/common/core/Button'

export interface ButtonFullScreenProps extends ButtonProps {
  toggleFullscreen:() => void;
}


const ButtonFullScreen: React.FC<ButtonFullScreenProps> = ({ toggleFullscreen }) => {
  return (
    <Button
      onClick={toggleFullscreen ?? (() => {})}
      className={styles.fullscreenButton}
      aria-label="Fullscreen"
    >
      <svg className={styles.fullscreenIcon} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 4h2v3h-3v2h5v-5zM14 5v2h3v3h2V5h-5z" />
      </svg>
    </Button>
  );
};

export default ButtonFullScreen;
