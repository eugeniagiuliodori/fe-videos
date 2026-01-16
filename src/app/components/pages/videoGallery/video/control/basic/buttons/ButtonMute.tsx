import Button from '@/components/common/ui/Button';
import { ButtonMuteProps } from "@/interfaces/interfaces";
import styles from "../../Control.module.css";

const ButtonMute: React.FC<ButtonMuteProps> = ({ toggleMute, muted, volume }) => {
  return (
    <Button
      onClick={toggleMute}
      className={styles.muteButton}
      aria-label={muted ? "Unmute" : "Mute"}
    >
      {muted || volume === 0 ? (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.5 12a4.5 4.5 0 01-4.5 4.5v-9A4.5 4.5 0 0116.5 12zM19 12c0-1.77-.77-3.36-1.98-4.47l-1.42 1.42A3 3 0 0017 12c0 1.1-.45 2.1-1.17 2.82l1.42 1.42C18.23 15.36 19 13.77 19 12z" />
        </svg>
      ) : (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 9v6h4l5 5V4L9 9H5z" />
        </svg>
      )}
    </Button>
  );
};

export default ButtonMute;
