import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./PagePlaylists.module.css";

export default function PagePlaylists() {
  return (
    <Box component="main" className={styles.main}>
      <Typography variant="h1" component="h1" className={styles.title}>
        🎥 PERSONAL PLAYLIST
      </Typography>
    </Box>
  );
}
