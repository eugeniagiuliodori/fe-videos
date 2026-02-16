import React, { useRef, useState} from "react";
import { PlayerProps } from "@/interfaces/interfaces";
import ButtonPlayPause from   "@/components/composed/ButtonPlayPause";
import ButtonMute from "@/components/composed/ButtonMute";
import ButtonFullScreen from "@/components/composed/ButtonFullScreen";
import Input from "@/components/common/ui/TypedInput";
import Box from "@mui/material/Box";
import Select from "@/components/common/ui/Select";
import FormOption from "./components/Form/FormOptionTheme";
import Dialog from "@/components/composed/Dialog";
import { OptionValue } from "@/interfaces/interfaces";
import styles from "./Control.module.css";
import type { SelectChangeEvent } from "@mui/material";
import { PlaybackRateMn, PlaybackRateMnItem } from "@/pages/Themes";
import IconMusic from '@mui/icons-material/LibraryMusic';
import  {playbackRatesOptions} from "@/pages/components/videoGallery/video/control/components/utils/utils";
import { BGCornerGlowBoxTheme } from "@/app/utils/utils";
import clsx from 'clsx';

const Control: React.FC<PlayerProps> = ({ className = "", playerRef,ref, setPlayingParent, playingParent, duration, setSeeking, theme, setTheme, played, playedSeconds, setPlayed, setPlayedSeconds, muted, volume, setMuted, setVolume,id, setCurrentID, playbackRate, setPlaybackRate}) => {





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
    setOpenAlert(true);
  };

  const fullScreenAcept = () => {
    const el = ref.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      setOpenAlert(false);
      el.requestFullscreen();
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

  return (
  
      <Box ref={containerRef} className={styles.ContainerControl} >
        <Box  className={composedClassName(className)} sx={BGCornerGlowBoxTheme(theme)}>
          <Box className={styles.BoxControl}>
            <ButtonPlayPause  togglePlay={togglePlay} playingParent={playingParent}/>
            <Box className={styles.BoxControlTime}>{formatTime(playedSeconds)} / {formatTime(duration)}</Box>
            <Box component="span" className={styles.WrapperControlProgress}>
                <Input  className={ styles.BoxControlProgress} 
                        trackClassName = {styles.BoxControlProgressTrack }
                        thumbClassName = {styles.BoxControlProgressThumb }
                        railClassName =  {styles.BoxControlProgressRail }
                        inputType="range" min={0} max={1} step={0.001}
                        value={played} onMouseDown={onSeekMouseDown} onChange={onSeekChange}
                        onMouseUp={onSeekMouseUp} aria-label="Progreso"
                        disabled={!playingParent}
                />
            </Box>
            <Box className={styles.ContainerVolume}>
              <ButtonMute  volume={volume} muted={muted} toggleMute={toggleMute}/>
              <Box component="span" className={styles.WrapperControlVolumen}>
                  <Input
                        className={styles.BoxControlVolume}
                        trackClassName = {styles.BoxControlVolumeTrack }
                        thumbClassName = {styles.BoxControlVolumeThumb }
                        railClassName =  {styles.BoxControlVolumeRail }
                        inputType="range" min={0} max={1} step={0.01} 
                        value={muted ? 0 : volume} 
                        onChange={onVolumeChange}  aria-label="Volumen"
                        disabled={!playingParent}   
                    />
                </Box>
            </Box>
              <Select value={playbackRate} className={styles.Playbackrate} 
                            onChange={handlerPlaybackRate} icons={[{label:getLabel(playbackRate),icon:IconMusic}]} options={playbackRatesOptions} 
                            menuSx={PlaybackRateMn}  menuItemSx={PlaybackRateMnItem}
              />
       
            <ButtonFullScreen toggleFullscreen={toggleFullscreen}/>
            <FormOption theme={theme} setTheme={setTheme}/>
        </Box>
      </Box>
      <Dialog
        open={openAlert}
        title="¡IMPORTANTE!"
        children="PRESIONE LA TECLA 'ESC' PARA SALIR DE PANTALLA COMPLETA"
        onAcept={fullScreenAcept}
      />
    </Box>

  );
};

export default Control;