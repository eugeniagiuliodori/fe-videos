import BaseTypedInput from "@/components/common/core/TypedInput"
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';
import type { TypedInputProps, RadioInputProps} from '../types/interfaces';
import styles from './styles/TypedInput/mui.module.css';
import { SxProps, Theme } from "@mui/material";



const Input =(
  props: TypedInputProps
) => {
  const { inputType} = props;  
  

  
    switch (inputType) {
      case "text":
      case "password":
      case "number": {
                  const textProps = props as Extract<TypedInputProps, { inputType: "text" | "password" | "number" }>  
                  const {inputType, ref, className, sx, ...restText} = textProps;
                
                  const mergedSx = mergeSx(sx);
                  const composedClassName = clsx(styles.InputStyle,className);
                                  
                  return( 
                  <BaseTypedInput<"text" | "password" | "number"> 
                      {...restText}
                      inputType={inputType}
                      className={composedClassName}
                      sx={mergedSx}
                  /> 
                )
          }
        
      

      case "range": {

        const sliderProps = props as Extract<TypedInputProps, { inputType: "range" }> 
        const {inputType, ref, className, trackClassName, thumbClassName, railClassName, sx, ...restRange} = sliderProps
        const mergedSx = mergeSx(sx);
        const composedClassName = clsx(styles.InputStyle,className);

        return (
        <BaseTypedInput
            {...restRange }
            inputType={inputType}
            className={composedClassName}
            sx={mergedSx}  
            trackClassName={trackClassName}
            thumbClassName={thumbClassName}
            railClassName={railClassName}
        />
        );
      }

      case "radio": {
        const radioProps = props as RadioInputProps;
        const {inputType, ref, className, sx, ...restRadio} = radioProps
        const mergedSx = mergeSx(sx);
        const composedClassName = clsx(styles.InputStyle,className);
        return (
          <BaseTypedInput
              {...restRadio }
              inputType={inputType}
              className={composedClassName}
              sx={mergedSx}
          />
        );
      }
   }

}


export default Input;