import VideoGallery from "@/components/pages/videoGallery/VideoGallery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./PageVideoGallery.module.css";

export default function PageWatch() {
  return (
    <Box component="main" className={styles.main}>
      <Typography variant="h1" component="h1" className={styles.title}>
        🎥 PLAYLIST
      </Typography>
      <Box className={styles.galleryContainer}>
        <VideoGallery />
      </Box>
    </Box>
  );
}
