import {DialogActions as MUIDialogActions} from "@mui/material";
import { DialogActionsProps as DialogActionsType } from "@mui/material";
import {AlignMain, AlignCross, AlignDirection, mapAlignMainAxis, mapAlignCrossAxis } from '../types/interfaces';
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';

export type DialogActionsProps  = Omit<DialogActionsType,  'ref' | 'classes'>
                                & {
                                loadingIndicator?:React.ReactElement,
                                mainAxis?: AlignMain,  
                                crossAxis?: AlignCross,
                                directionFlex?: AlignDirection                            
                              };

const isLayoutComplete = (flexDirection?: AlignDirection, justifyContent?: AlignMain, alignItems?: AlignCross) => {
  return !!(flexDirection && justifyContent && alignItems);
}

const isLayoutEmpty = (flexDirection?: AlignDirection, justifyContent?: AlignMain, alignItems?: AlignCross) => {
  return flexDirection === undefined && justifyContent === undefined && alignItems === undefined
}

const DialogActions = 
(props: DialogActionsProps & {ref?: React.Ref<HTMLDivElement>}) => {
    const { className, ref, sx, mainAxis, crossAxis, directionFlex, ...rest } = props;
    const mergedSx = mergeSx(sx,
        isLayoutComplete(directionFlex, mainAxis, crossAxis) ? 
        {
            "flexDirection":directionFlex,
            "justifyContent":mainAxis,
            "alignItems":crossAxis
        }
        :
        isLayoutEmpty(directionFlex, mainAxis,crossAxis) ?
        {
            "flexDirection":"row",
            "justifyContent":"center",   
            "alignItems":"center"
        } : 
        {
            "flexDirection":"row",
            "justifyContent":"center",  //como mejora se puede evaluar qué permitir 
            "alignItems":"center"       //de los inputs del cliente sin perder coherencia visual
        } 
    );
    
    const composedClassName = clsx(className);

    return(
        <MUIDialogActions 
            ref={ref}
            className={composedClassName}
            sx={mergedSx}
            {...rest}
        />)
}

export default DialogActions;