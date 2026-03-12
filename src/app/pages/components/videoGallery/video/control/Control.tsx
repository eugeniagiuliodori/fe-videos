import React, { useRef, useState} from "react";
import { PlayerProps } from "@/types/interfaces";
import ButtonPlayPause from   "@/components/composed/ButtonPlayPause";
import ButtonMute from "@/components/composed/ButtonMute";
import ButtonFullScreen from "@/components/composed/ButtonFullScreen";
import Input from "@/components/common/ui/TypedInput";
import Box from "@mui/material/Box";
import Select from "@/components/common/ui/Select";
import FormOption from "./components/Form/FormOptionTheme";
import Dialog from "@/components/composed/Dialog";
import { OptionValue } from "@/types/interfaces";
import muiStyles from "./styles/mui.module.css";
import styles from "./styles/control.module.css";
import type { SelectChangeEvent } from "@mui/material";
import IconMusic from '@mui/icons-material/LibraryMusic';
import  {playbackRatesOptions} from "@/pages/components/videoGallery/video/control/components/utils/utils";
import { BGCornerGlowBoxTheme } from "@/app/utils/utils";
import clsx from 'clsx';
import { PlaybackRateMn } from '@/app/styles/Themes';
import { ThemedBox } from "@/pages/components/videoGallery/video/control/components/Box/ThemedBox";
import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeProviderWrapper';


const Control: React.FC<PlayerProps> = ({ className = "", playerRef,ref, setPlayingParent, playingParent, duration, setSeeking, theme, setTheme, played, playedSeconds, setPlayed, setPlayedSeconds, muted, volume, setMuted, setVolume,id, setCurrentID, playbackRate, setPlaybackRate}) => {



  const { activeTheme } = useContext(ThemeContext);



  const containerRef = useRef<HTMLDivElement | null>(null);
  const formatTime = (sec: number | undefined): string => {
    if (sec === undefined || isNaN(sec)) return "0:00";
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    const m = Math.floor(sec / 60);
    return `${m}:${s}`;
  };
  const onSeekChange = (_event: Event, value: number | number[]) => {
    const fraction =  value as number; 
    setPlayed(fraction);
    setPlayedSeconds(fraction * duration);
  };
  const onSeekMouseDown = () => {setSeeking(true)};
  const onSeekMouseUp = () => {setSeeking(false);playerRef.current?.seekTo(played)};
  const onVolumeChange = (_event: any, value: number | number[]) => {
    const v = value as number; 
    setVolume(v);
    setMuted(v === 0);
  };


  const toggleFullscreen = () => {
     const el = ref.current;
  if (!el) return;

  if (!document.fullscreenElement) {
    // entrar en fullscreen
    el.requestFullscreen();
  } else {
    // salir de fullscreen
    document.exitFullscreen();
  }
  }

  const togglePlay = () => {setPlayingParent((p:boolean) => !p);!playingParent ? setCurrentID(id) : setCurrentID(0) };
  const toggleMute = () => setMuted((m) => !m);
  const [openAlert, setOpenAlert] = useState(false);


  const handlerPlaybackRate = (event: SelectChangeEvent<OptionValue> , _child: React.ReactNode ) => {
    setPlaybackRate(event.target.value);
  }

    const composedClassName = (className:string) => clsx(
                                    styles.CornerGlowBox,
                                    className
                                  );

    
    const getLabel = (value: number) => {
       const res = playbackRatesOptions.find((elem:any) => value === elem.value);
       const label = res?res.label??"":"";
       return label;
    }

     const composedMainClassName = clsx(muiStyles, styles.ContainerControl);

  return (
  
      <ThemedBox ref={containerRef} className={composedMainClassName} >
        <ThemedBox  className={composedClassName(className)} sx={BGCornerGlowBoxTheme(activeTheme.tokens)}>
          <ThemedBox className={styles.BoxControl}>
            <ButtonPlayPause disabled={false} togglePlay={togglePlay} playingParent={playingParent}/>
            <Box className={styles.BoxControlTime}>{formatTime(playedSeconds)} / {formatTime(duration)}</Box>
            <ThemedBox component="span" className={styles.WrapperControlProgress}>
                <Input  className={ styles.BoxControlProgress} 
                        trackClassName = {styles.BoxControlProgressTrack }
                        thumbClassName = {styles.BoxControlProgressThumb }
                        railClassName =  {styles.BoxControlProgressRail }
                        inputType="range" min={0} max={1} step={0.001}
                        value={played} onMouseDown={onSeekMouseDown} onChange={onSeekChange}
                        onMouseUp={onSeekMouseUp} aria-label="Progreso"
                        disabled={!playingParent}
                />
            </ThemedBox>
            <ThemedBox className={styles.ContainerVolume}>
              <ButtonMute  disabled={!playingParent} volume={volume} muted={muted} toggleMute={toggleMute}/>
              <ThemedBox component="span" className={styles.WrapperControlVolumen}>
                  <Input
                        className={styles.BoxControlVolumen}
                        trackClassName = {styles.BoxControlVolumeTrack }
                        thumbClassName = {styles.BoxControlVolumeThumb }
                        railClassName =  {styles.BoxControlVolumeRail }
                        inputType="range" min={0} max={1} step={0.01} 
                        value={muted ? 0 : volume} 
                        onChange={onVolumeChange}  aria-label="Volumen"
                        disabled={!playingParent}   
                    />
                </ThemedBox>
            </ThemedBox>
            <Select value={playbackRate} className={styles.Playbackrate} 
                          onChange={handlerPlaybackRate} icons={[{label:getLabel(playbackRate),icon:IconMusic}]} options={playbackRatesOptions} 
                          menuSx={PlaybackRateMn}  /*menuItemSx={PlaybackRateMnItem}*/
            />
            <ButtonFullScreen  disabled={false} toggleFullscreen={toggleFullscreen}/>
            <FormOption theme={theme} setTheme={setTheme}/>
        </ThemedBox>
      </ThemedBox>
    </ThemedBox>

  );
};

export default Control;