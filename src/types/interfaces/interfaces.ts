import React from "react";
import type { RefObject } from "react";
import ReactPlayer from "react-player";
import { DialogProps } from "@mui/material";

export interface PlayerProps {
  id:number,
  url: string;
  title:string;
  className?: string;
  playerRef: RefObject<ReactPlayer | null>;
  ref: RefObject<HTMLDivElement | null>;
  playingParent: boolean;
  theme:string;
  duration:number;
  played: number;
  playedSeconds:number;
  muted:boolean;
  volume: number;
  playbackRate: number;
  setPlayingParent:React.Dispatch<React.SetStateAction<boolean>>;
  setSeeking:React.Dispatch<React.SetStateAction<boolean>>;
  setTheme:React.Dispatch<React.SetStateAction<string>>;
  setPlayed:React.Dispatch<React.SetStateAction<number>>;
  setPlayedSeconds:React.Dispatch<React.SetStateAction<number>>;
  setMuted:React.Dispatch<React.SetStateAction<boolean>>;
  setVolume:React.Dispatch<React.SetStateAction<number>>;
  setCurrentID:React.Dispatch<React.SetStateAction<number>>;
  setPlaybackRate:React.Dispatch<React.SetStateAction<OptionValue>>;
}

export interface VideoPlayerProps {
  id:number,
  url?: string;
  playerRef: RefObject<ReactPlayer | null >;
  title: string;
  theme: string;
  muted:boolean;
  volume: number;
  playingParent: boolean;
  seeking: boolean;
  playbackRate: number;
  setPlayingParent:React.Dispatch<React.SetStateAction<boolean>>;
  setDuration:React.Dispatch<React.SetStateAction<number>>;
  setCurrentID:React.Dispatch<React.SetStateAction<number>>;
  setPlayed:React.Dispatch<React.SetStateAction<number>>;
  setPlayedSeconds:React.Dispatch<React.SetStateAction<number>>;
}

export interface ButtonPlayPauseProps{
  togglePlay:() => void;
  playingParent:boolean
}

export interface ButtonMuteProps{
  toggleMute:() => void;
  volume:number;
  muted: boolean;
}

export type OptionValue = string | number;

export interface PlayerThemeProps {
    theme: string;
    setTheme:React.Dispatch<React.SetStateAction<string>>;
} 

export interface CustomDialogESCProps extends DialogProps {
  open: boolean;
  title: string;
  onAcept: ()=> void;
}

export interface SafeReactPlayerProps {
  id:number,
  currentID:number,
  url?: string | string[];
  title:string
  playing?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  volume?: number;
  playbackRate?: number;
  width?: string | number;
  height?: string | number;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void;
  setCurrentID:React.Dispatch<React.SetStateAction<number>>;
  
}