"use client";

import React, { useRef, useState, useEffect } from "react";
import Player from "@/components/pages/videoGallery/video/player/Player";
import Control from "./control/Control";
import { SafeReactPlayerProps, OptionValue } from "@/interfaces/interfaces";
import Box from "@mui/material/Box";
import styles from "./Video.module.css";

const SafeReactPlayer: React.FC<SafeReactPlayerProps> = ({
  url,
  title,
  id,
  currentID,
  setCurrentID,
  ...rest
}) => {
  const [_playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const playerRef = useRef<any>(null);
  const [theme, setTheme] = useState("youtubered");
  const [duration, setDuration] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const [played, setPlayed] = useState<number>(0);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [muted, setMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [playbackRate, setPlaybackRate] = useState<OptionValue>(1);
  const ref = useRef<HTMLDivElement>(null);

  // evita renderizar en SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const videoUrl = Array.isArray(url) ? url[0] : url ?? "";

  return (
    <Box ref={ref} className={styles.playerWrapper}>
      <Player
        url={videoUrl}
        playerRef={playerRef}
        title={title}
        theme={theme}
        playingParent={id === currentID}
        setPlayingParent={setPlaying}
        setDuration={setDuration}
        seeking={seeking}
        setPlayed={setPlayed}
        setPlayedSeconds={setPlayedSeconds}
        muted={muted}
        volume={volume}
        id={id}
        setCurrentID={setCurrentID}
        playbackRate={playbackRate as number}
      />
      <Control
        url={videoUrl}
        title={title}
        playerRef={playerRef}
        ref={ref}
        playingParent={id === currentID}
        setPlayingParent={setPlaying}
        duration={duration}
        setSeeking={setSeeking}
        theme={theme}
        setTheme={setTheme}
        played={played}
        playedSeconds={playedSeconds}
        setPlayed={setPlayed}
        setPlayedSeconds={setPlayedSeconds}
        muted={muted}
        volume={volume}
        setMuted={setMuted}
        setVolume={setVolume}
        id={id}
        setCurrentID={setCurrentID}
        playbackRate={playbackRate as number}
        setPlaybackRate={setPlaybackRate}
      />
    </Box>
  );
};

export default SafeReactPlayer;
