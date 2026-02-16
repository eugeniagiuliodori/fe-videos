import BaseTypedInput from "@/components/common/core/TypedInput"
import styles from './styles_1/TypedInput.module.css';
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';
import type { TypedInputProps, InputTypeToRef, TextLikeProps, RangeProps, RadioInputProps} from '../types/interfaces';



const Input =(
  props: TypedInputProps
) => {
  const { className, sx, ref, inputType,...rest } = props;  
  
  const mergedSx = mergeSx(sx);
  const composedClassName = clsx(styles.TypedInput,className);
  
    switch (props.inputType) {
      case "text":
      case "password":
      case "number": {
                  const textProps = props as Extract<TypedInputProps, { inputType: "text" | "password" | "number" }>  
                  const {inputType, ref, className, sx, ...restText} = textProps;
                                  
                  return( 
                  <BaseTypedInput<"text" | "password" | "number"> 
                      {...restText}
                      inputType={inputType}
                      className={className}
                      sx={mergedSx}
                  /> 
                )
          }
        
      

      case "range": {

        const sliderProps = props as Extract<TypedInputProps, { inputType: "range" }> 
        const {inputType, ref, className, sx, ...restRange} = sliderProps
        const composedClassName = clsx(className);

        return (
        <BaseTypedInput
            {...restRange }
            inputType={inputType}
            className={composedClassName}
            sx={mergedSx}  
        />
        );
      }

      case "radio": {
        const radioProps = props as RadioInputProps;
        const {inputType, ref, className, sx, ...restRadio} = radioProps
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