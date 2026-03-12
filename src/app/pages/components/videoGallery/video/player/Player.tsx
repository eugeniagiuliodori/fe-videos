"use client";
import React from "react";
import ReactPlayer from "react-player";
import { VideoPlayerProps } from "@/types/interfaces";
import Box from "@mui/material/Box";
import muiStyles from "./styles/mui.module.css";
import styles from "./styles/player.module.css";
import { BGBoxTheme } from "@/app/utils/utils";
import { BGCornerGlowBoxTheme } from "@/app/utils/utils";
import clsx from 'clsx';
import { ThemedBox } from "@/pages/components/videoGallery/video/control/components/Box/ThemedBox";
import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeProviderWrapper';



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

    const composedClassName = clsx(muiStyles,
                                 styles);


    const { activeTheme } = useContext(ThemeContext);

  return (
     <ThemedBox
      className={composedClassName} sx={{height:"80%"}}>
    <ThemedBox /*sx={ BGBoxTheme(theme)}*/ className={muiStyles.playerContainer } sx={BGCornerGlowBoxTheme(activeTheme.tokens)}  >
      <ThemedBox  className={ clsx(muiStyles.titleBar, styles.titleBar)}  > {title} </ThemedBox>
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
    </ThemedBox>
    </ThemedBox>
  );
};

export default VideoPlayer;
