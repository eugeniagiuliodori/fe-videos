import { SxProps, Theme } from '@mui/material/styles';



export const mergeSx = (...values: (SxProps<Theme> | undefined)[]): SxProps<Theme> =>
    values.flatMap(v => (Array.isArray(v) ? v : v ? [v] : []))
