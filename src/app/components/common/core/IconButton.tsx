import { IconButton as MUIIconButton, IconButtonProps as IconButtonType} from "@mui/material";
import styles from './structure_styles/styles.module.css';
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';

export type IconButtonProps  = Omit<IconButtonType,'ref' | 'classes'| 'loadingIndicator'> 

const IconButton = 
(props: IconButtonProps & {ref?: React.Ref<HTMLButtonElement>}) => {
  const { className, ref, children, disabled, sx, 
          onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onFocus, onBlur,
          ...rest } = props;

  const mergedSx = mergeSx(sx);
  const composedClassName = clsx(className);


  return (
    <MUIIconButton
      ref={ref}
      className={composedClassName}
      sx={mergedSx}
      disabled={disabled}
      /*-- PARA EL REFACTOR CON DEFINICIONES DE STATES Y GLOBAL STATES.
      PARA CADA EVENTO EN ÚLTIMO ORDEN, INVOCAR SU CORRESPONDIENTE PROPAGADO 
      DESDE PROPS
      --*/
      /* hover */
      onMouseEnter={()=>{}}
      onMouseLeave={()=>{}}
      /* focus */
      onFocus={()=>{}}
      onBlur={()=>{}}
      /* active */
      onMouseUp={()=>{}}
      onMouseDown={()=>{}}
      /*--                                                             --*/

      {...rest}
      >
        
          {children}
           
    </MUIIconButton>
  );
}
export default IconButton;

