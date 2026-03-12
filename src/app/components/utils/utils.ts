import { SxProps, Theme } from '@mui/material/styles';



export const mergeSx = (...values: (SxProps<Theme> | undefined)[]): SxProps<Theme> =>
    values.flatMap(v => (Array.isArray(v) ? v : v ? [v] : []))



export const hexToRgba=(hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`; 
}

export const increaseAlpha=(rgba: string, factor: number): string => {
  const match = rgba.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)/);
  if (!match) return rgba;

  const r = match[1];
  const g = match[2];
  const b = match[3];
  let a = parseFloat(match[4]);
  a = Math.min(1, a + factor);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}


