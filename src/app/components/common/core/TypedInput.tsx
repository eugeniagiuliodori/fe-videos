import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";       
import type { TextFieldProps } from "@mui/material/TextField";
import type { SliderProps } from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import type { RadioProps } from "@mui/material/Radio";
import type { TypedInputProps, InputTypeToRef,  
              RangeProps, RadioInputProps, TextLikeProps} from '../types/interfaces';
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';


const normalizeTextFieldValue = (value: unknown, type:string)=> {
   value != undefined && value != null ? value : null;
}

const normalizeSliderValue = (value: unknown)=> {
  if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
  }
  else{
    if (Array.isArray(value) && value.length === 2 && value.every(v => typeof v === 'number' && Number.isFinite(v))) {
      return value;
    }
    else{
      if(Array.isArray(value)){
        return 0;
      }
      else{
        return 0;
      }
    }
  
  }


}
                           

const TypedInput = <T extends TypedInputProps["inputType"]>
(props: Extract<TypedInputProps, { inputType: T }>) => 
  {
   switch (props.inputType) {
          case "range":{
              const { className, sx, onChange, value, defaultValue, disabled, onChangeCommitted,
                      trackClassName, thumbClassName, railClassName,
                      trackSx, thumbSx, railSx, inputType, ref,
                      onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onFocus, onBlur,
                      ...rest } = props as RangeProps;

              const mySlotProps = (trackClassName || thumbClassName || railClassName)
                ? {
                    track: trackClassName ? {className: trackClassName, sx : trackSx} : undefined,
                    thumb: thumbClassName ? {className: thumbClassName, sx: thumbSx } : undefined,
                    rail: railClassName ? { className: railClassName, sx: railSx } : undefined,
                  }
                : undefined;

              const mergedSx = mergeSx(sx);  
              const composedClassName = clsx(className);  

              return <Slider   
                        ref={ref as React.Ref<InputTypeToRef["range"]>}
                        className={composedClassName}
                        sx={mergedSx}
                        {...(rest as SliderProps)} 
                        value={normalizeSliderValue(value)}
                        defaultValue={normalizeSliderValue(defaultValue)}
                        disabled={disabled}
                        disableSwap={true}
                        onChange={(event, value, activeThumb) => {
                          onChange?.(event, value, activeThumb);
                        }}
                        onChangeCommitted={(event, value) => {
                          onChangeCommitted?.(event, value);
                        }}
                        slotProps={mySlotProps}
                        /*-- PARA EL REFACTOR CON DEFINICIONES DE STATES Y GLOBAL STATES --*/
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
                      />;
          }

          case "text":
          case "password":
          case "number":{
              const { className, sx, type, inputType, ref, onChange, value, defaultValue, disabled,
                      onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onFocus, onBlur,
                      ...rest } = props as TextLikeProps;
              const mergedSx = mergeSx(sx); 
              const composedClassName = clsx(className); 
              
              return <TextField 
                        ref={ref as React.Ref<InputTypeToRef["text"] >}
                        type={type} 
                        {...(rest as TextFieldProps)} 
                        className={composedClassName}
                        sx={mergedSx}
                        value={normalizeTextFieldValue(value, type ?? 'text')}
                        defaultValue={normalizeTextFieldValue(defaultValue, type ?? 'text')}
                        disabled={disabled}
                        onChange={(event) => {
                          onChange?.(event);
                        }}
                        /*-- PARA EL REFACTOR CON DEFINICIONES DE STATES Y GLOBAL STATES --*/
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
                      />;
          }
          case "radio":{
              const { className, sx, inputType, ref, onChange, value, checkedIcon, checked, icon,
                      onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onFocus, onBlur,
                      ...rest } = props as RadioInputProps;
              const mergedSx = mergeSx(sx);  
              const composedClassName = clsx(className);
              
              return <Radio  
                        ref={ref as React.Ref<InputTypeToRef["radio"]>}
                        {...rest as RadioProps} 
                        className={composedClassName}
                        sx={mergedSx}
                        value={value}
                        checkedIcon={checkedIcon}
                        checked={checked}
                        icon={icon}
                        onChange={(event, checked) => {
                          onChange?.(event, checked);
                        }}
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
                      />;
          }
          default:
            return null;
        }
}


export default TypedInput;


