"use client";
import React from "react";
import ReactPlayer from "react-player";
import { VideoPlayerProps } from "@/interfaces/interfaces";
import Box from "@mui/material/Box";
import styles from "./Player.module.css";

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  title,
  playerRef,
  theme,
  playingParent,
  setPlayingParent,
  setDuration,
  seeking,
  setPlayed,
  setPlayedSeconds,
  muted,
  volume,
  id,
  setCurrentID,
  playbackRate,
}) => {
  const handlePlay = () => {
    setPlayingParent(true);
    setCurrentID(id);
  };
  const handlePause = () => {
    setPlayingParent(false);
    setCurrentID(0);
  };
  const handleProgress = (state: { played: number; playedSeconds: number }) => {
    if (!seeking) {
      setPlayed(state.played);
      setPlayedSeconds(state.playedSeconds);
    }
  };

  return (
    <Box className={styles.playerContainer}>
      <Box
        className={styles.titleBar}
        style={{ backgroundColor: theme === "youtubered" ? "#FF0000" : "#000000" }}
      >
        {title}
      </Box>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playingParent}
        controls={false}
        width="100%"
        height="100%"
        onPlay={handlePlay}
        onStart={() => console.log("START mounted")}
        onPause={handlePause}
        onProgress={handleProgress}
        onDuration={(dur: number) => setDuration(dur)}
        volume={volume}
        muted={muted}
        playbackRate={playbackRate}
        onEnded={() => {
          setPlayingParent(false);
          setPlayed(0);
        }}
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              modestbranding: 1,
              rel: 0,
              fs: 0,
              disablekb: 1,
              iv_load_policy: 3,
            },
          },
        }}
      />
    </Box>
  );
};

export default VideoPlayer;
