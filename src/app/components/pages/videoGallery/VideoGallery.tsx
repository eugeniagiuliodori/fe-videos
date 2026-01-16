"use client";

import { useState } from "react";
import SafeReactPlayer from "@/components/pages/videoGallery/video/Video";
import Box from "@mui/material/Box";
import styles from "./VideoGallery.module.css";

const basic_videos = [
  { id: 1, title: "Rosalía - Sexo, Violencia y Llantas", videId: "m6z1sW_qtyg" },
  { id: 2, title: "Rosalía - Reliquia", videId: "xPaSuWrBAQI" },
  { id: 3, title: "Rosalía - Divinize", videId: "OxDmGz60hws" },
  { id: 4, title: "Rosalía - Porcelana", videId: "2bFquRBvonc" },
  { id: 5, title: "Rosalía - Mio Cristo Piange Diamanti", videId: "eUgcMXYvVxA" },
  { id: 6, title: "Rosalía - Berghain", videId: "htQBS2Ikz6c" },
  { id: 7, title: "Rosalía - La Perla", videId: "gEHK00H_PxQ" },
  { id: 8, title: "Rosalía - Mundo Nuevo", videId: "fONox0tshw4" },
  { id: 9, title: "Rosalía - De Madrugá", videId: "5tWVlufnZFQ" },
  { id: 10, title: "Rosalía - Dios Es Un Stalker", videId: "fLmQbJ4SDTA" },
  { id: 11, title: "Rosalía - La Yugular", videId: "3-TsnIjVU8o" },
  { id: 12, title: "Rosalía - Sauvignon Blanc", videId: "pAyjq0Tzs24" },
  { id: 13, title: "Rosalía - La Rumba del Perdón", videId: "qVged3MgZAw" },
  { id: 14, title: "Rosalía - Memória", videId: "2LrRw6AZEts" },
  { id: 15, title: "Rosalía - Magnolias", videId: "KYVf37pRXCw" },
];

const YT_URL = "https://www.youtube.com/watch?v=";
const YT_THUMB = "https://i.ytimg.com/vi/";
const makeVideoUrl = (id: string) => `${YT_URL}${id}`;
const makeThumb = (id: string) => `${YT_THUMB}${id}/hqdefault.jpg`;

const videos = basic_videos.map((e) => ({
  id: e.id,
  title: e.title,
  url: makeVideoUrl(e.videId),
  thumb: makeThumb(e.videId),
}));

export default function VideoGallery() {
  const [currentID, setCurrentID] = useState(0);

  return (
    <Box className={styles.galleryWrapper}>
      {videos.map((video) => (
        <Box key={video.url} className={styles.videoContainer}>
          <SafeReactPlayer
            url={video.url}
            title={video.title}
            controls={false}
            width="100%"
            height="100%"
            id={video.id}
            currentID={currentID}
            setCurrentID={setCurrentID}
          />
        </Box>
      ))}
    </Box>
  );
}
