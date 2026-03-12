'use client'
import VideoGallery from "@/app/pages/components/videoGallery/VideoGallery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./gallery.module.css";


export default function PageWatch() {
  return (
    <Box component="main" className={styles.main}>
      <Typography variant="h4" component="h4" className={styles.title}>
        VIDEOS ACTIVOS
      </Typography>
      <Box className={styles.galleryContainer}>
        <VideoGallery />
      </Box>
    </Box>
  );
}
