import React, { useRef, useState} from "react";
import { PlayerProps } from "@/interfaces/interfaces";
import ButtonPlayPause from "./basic/buttons/ButtonPlayPause";
import ButtonMute from "./basic/buttons/ButtonMute";
import ButtonFullScreen from "./basic/buttons/ButtonFullScreen";
import SimpleCustomInput from "@/components/common/ui/TypedInput";
import Box from "@mui/material/Box";
import CustomSelect from "@/components/common/ui/Select";
import PlayerTheme from "./subcomponents/theme/PlayerTheme";
import SimpleCustomDialog from "./basic/dialogs/SimpleCustomDialog";
import { alpha } from '@mui/material/styles';
import { ChangeEvent  } from "react";
import { OptionValue } from "@/interfaces/interfaces";
import styles from "./Control.module.css";


const Control: React.FC<PlayerProps> = ({ url, title, className = "", playerRef,ref, setPlayingParent, playingParent, duration, setSeeking, theme, setTheme, played, playedSeconds, setPlayed, setPlayedSeconds, muted, volume, setMuted, setVolume,id, setCurrentID, playbackRate, setPlaybackRate}) => {

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

  const handlerPlaybackRate = (event: ChangeEvent<HTMLInputElement> | (Event & { target: { value: unknown; name: string; }; }), _child: React.ReactNode ) => {
    setPlaybackRate(event.target.value as OptionValue);
  }
  

  return (
    <Box ref={containerRef} sx={{position:"relative", display: "flex", width:"100%",  overflow:"hidden",  borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" }} >
     <Box
        sx={{ width:"100%",
          position: "relative", p: "0.75rem", minWidth: 0, bgcolor: theme === "youtubered" ? "#FF0000" : "#000000",
          "&::before, &::after": {content: "''", position: "absolute", width: "10rem",   height: "10rem", pointerEvents: "none"},
          "&::before": {bottom: 0, left: 0,background: "radial-gradient(circle at bottom left, rgba(255,255,255,0.45), transparent 70%)"},
          "&::after": {bottom: 0,right: 0, background: "radial-gradient(circle at bottom right, rgba(255,255,255,0.45), transparent 70%)"},
        }}
      >
        <Box className={styles.BoxControl} >
          <ButtonPlayPause  togglePlay={togglePlay} playingParent={playingParent}/>
          <Box className={styles.BoxControlTime}>{formatTime(playedSeconds)} / {formatTime(duration)}</Box>
          <SimpleCustomInput className={styles.BoxControlProgress} 
                              trackClassName = {styles.track }
                              thumbClassName = {styles.thumb }
                              railClassName =  {styles.rail }
                              inputType="range" min={0} max={1} step={0.001}
                              value={played} onMouseDown={onSeekMouseDown} onChange={onSeekChange}
                              onMouseUp={onSeekMouseUp} aria-label="Progreso"
                              disabled={!playingParent}
          />
          <Box sx={{display:"flex", width:"auto", alignItems:"center"}}>
            <ButtonMute volume={volume} muted={muted} toggleMute={toggleMute}/>
            <SimpleCustomInput sx={{ color:"white",   justifyContent:"center", minWidth:"0rem", width:"6rem", height:"0.25rem", appearance: 'none', 
                                      WebkitAppearance: 'none', MozAppearance: 'none', borderRadius:"0.25rem",
                                      '& .MuiSlider-track': {height: "0.18rem"},
                                      '& .MuiSlider-thumb': {width: "0.8rem", height: "0.8rem"},
                                      '& .MuiSlider-rail': {height: "2.5rem", backgroundColor:(theme) => alpha(theme.palette.common.white, 0.45)},
                                  }} 
                              inputType="range"
                              min={0} max={1} step={0.01} value={muted ? 0 : volume} 
                              disabled={!playingParent} onChange={onVolumeChange}  aria-label="Volumen" />
          </Box>
          <CustomSelect value={playbackRate} onChange={handlerPlaybackRate} options={[0.5, 0.75, 1, 1.25, 1.5, 2]}/>
          <ButtonFullScreen toggleFullscreen={toggleFullscreen}/>
          <PlayerTheme theme={theme} setTheme={setTheme}/>
        </Box>
      </Box>
      <SimpleCustomDialog
        open={openAlert}
        title="¡IMPORTANTE!"
        children="PRESIONE LA TECLA 'ESC' PARA SALIR DE PANTALLA COMPLETA"
        onAcept={fullScreenAcept}
        
      />
    </Box>
  );
};

export default Control;