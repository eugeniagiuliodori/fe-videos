import { forwardRef } from "react";
import {Typography as MUITypography} from "@mui/material";
import { TypographyProps as TypographyType} from "@mui/material";


    export type TypographyProps<T = unknown> = Omit<TypographyType , 'classes' | 'component' | 'paragraph' | 'variantMapping'>  ;
    
    

    type TypographyComponent = <T = unknown>(
        props: TypographyProps<T> & React.RefAttributes<HTMLElement>
        ) => React.ReactElement;

  const Typography=forwardRef (function <T = unknown>(props:TypographyProps<T>, ref:React.ForwardedRef<any>) {

    const { className, children, ...rest } = props;
    return(
         <MUITypography 
            ref={ref}
            className={className}
            {...rest}
        >
            {children}
        </MUITypography>
    );
}
) as TypographyComponent;

export default Typography;