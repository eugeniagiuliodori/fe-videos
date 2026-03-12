import {Typography as MUITypography} from "@mui/material";
import { TypographyProps as TypographyType} from "@mui/material";
import type {MapVariantTag, TypeVariantTypography} from "../types/interfaces";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';

    
export type TypographyProps = Omit<TypographyType , 'ref' | 'variant' | 'classes' | 'component' | 'paragraph' | 'variantMapping'>  ;
    



  const Typography = <V extends TypeVariantTypography>(
      props: TypographyProps & {
        variant: V;
        ref?: React.Ref<MapVariantTag<V>>;
      },
      
  ) => {
    const { className, sx, children, ref, variant, 
            onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onFocus, onBlur,
            ...rest } = props;
    const mergedSx = mergeSx(sx); 
    const composedClassName = clsx(className);

    return(
         <MUITypography 
            ref={ref}
            className={composedClassName}
            sx={mergedSx}
            variant={variant}
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
        </MUITypography>
    );
  }      

  export default Typography;