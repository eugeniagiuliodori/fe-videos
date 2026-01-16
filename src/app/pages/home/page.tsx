"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { redirect } from "next/navigation";
import styles from "./PageHome.module.css";

export default function Home() {
  return (
    <Container component="main" className={styles.main}>
      <Typography variant="h1" component="h1" className={styles.title}>
        🎥 UN ESPACIO MUSICAL
      </Typography>
      <Box className={styles.buttonContainer}>
        <Button
          onClick={() => redirect("/pages/playlists")}
          className={styles.redButton}
        >
          <Typography>MIS PLAYLISTS</Typography>
        </Button>
        <Button
          onClick={() => redirect("/pages/videoGallery")}
          className={styles.redButton}
        >
          <Typography>REPRODUCIR</Typography>
        </Button>
      </Box>
    </Container>
  );
}
