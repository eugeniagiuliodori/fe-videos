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
    const { className, sx, children, ref, variant, ...rest } = props;
    const mergedSx = mergeSx(sx); 
    const composedClassName = clsx(className);

    return(
         <MUITypography 
            ref={ref}
            className={composedClassName}
            sx={mergedSx}
            variant={variant}
            {...rest}
        >
            {children}
        </MUITypography>
    );
  }      

  export default Typography;