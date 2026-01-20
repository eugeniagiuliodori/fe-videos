import { forwardRef } from "react";
import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";       
import type { TextFieldProps } from "@mui/material/TextField";
import type { SliderProps } from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import type { RadioProps } from "@mui/material/Radio";


  type RadioType = string | number;

  export type TypedInputProps =
  | ({
      inputType: "text" | "password" | "number";
      onChange?: TextFieldProps["onChange"];
      value?:TextFieldProps["value"];
      defaultValue?: TextFieldProps["defaultValue"];
      disabled?:TextFieldProps["disabled"];
      type?:TextFieldProps["type"];
    } & Omit<TextFieldProps, 'onChange' | 'classes' | 'FormHelperTextProps' | 'InputLabelProps' | 'inputProps' | 'InputProps' | 'inputRef' | 'onChange' | 'SelectProps' | 'slotProps' | 'slots' | 'value' | 'defaultValue' | 'disabled' | 'type'>)
  | ({
      inputType: "range";
      onChange?: SliderProps["onChange"];
      onChangeCommitted?:SliderProps["onChangeCommitted"];
      value?:SliderProps["value"]
      defaultValue?: SliderProps["defaultValue"];
      disabled?:SliderProps["disabled"];
      trackClassName?: string;
      thumbClassName?: string;
      railClassName?: string;
    } & Omit<SliderProps, 
        'value' | 'defaultValue' | 'disabled' |'onChange' | 'onChangeCommitted' | 'classes' | 'components' |
        'componentsProps' | 'slotProps' | 'slots'>)
  | ({
      inputType: "radio";
      onChange?: RadioProps["onChange"];
      value?:RadioType;
      checked?:RadioProps["checked"];
      checkedIcon?:RadioProps["checkedIcon"];
      icon?:RadioProps["icon"];
    } & Omit<RadioProps, 'onChange' | 'classes' | 'disabled' | 'inputProps' | 'inputRef' | 'slotProps' | 'slots' | 'value' | 'checked' | 'checkedIcon' | 'icon'>);
  

const normalizeTextFieldValue = (value: unknown, type:string)=> {
  let valid=true;
  /*switch(type) {
    case 'button':{
      break;
    }
    case 'checkbox':{
      break;
    }
    case 'color':{
      break;
    }
    case 'date':{
      break;
    }
    case 'datetime-local':{
      break;
    }
    case 'email':{
      break;
    }
    case 'file':{
      break;
    }
    case 'hidden':{
      break;
    }
    case 'image':{
      break;
    }
    case 'month':{
      break;
    }
    case 'number':{
      break;
    }
    case 'password':{
      break;
    }
    case 'radio':{
      break;
    }
    case 'range':{
      break;
    }
    case 'reset':{
      break;
    }
    case 'search':{
      break;
    }
    case 'submit':{
      break;
    }
    case 'tel':{
      break;
    }
    case 'text':{
      break;
    }
    case 'time':{
      break;
    }
    case 'url':{
      break;
    }
    case 'week':{
      break;
    }
  }*/
  valid = value != undefined && value != null;
  if(valid){
    return value;
  }
  else{
    return null;
  }

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
        return [0,0];
      }
      else{
        return 0;
      }
    }
  
  }


}



const TypedInput = 
  forwardRef<unknown, TypedInputProps>((props, ref) => 
  {

        switch (props.inputType) {
          case "range":{
              const { className, onChange, value, defaultValue, disabled, onChangeCommitted,
                      trackClassName, thumbClassName, railClassName,...rest } = props;

              const mySlotProps = (trackClassName || thumbClassName || railClassName)
                ? {
                    track: trackClassName ? {className : trackClassName} : undefined,
                    thumb: thumbClassName ? { className: thumbClassName } : undefined,
                    rail: railClassName ? { className: railClassName } : undefined,
                  }
                : undefined;

              return <Slider   
                        ref={(ref ?? undefined) as SliderProps["ref"]} 
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
                      />;
          }

          case "text":
          case "password":
          case "number":{
              const {className, type, onChange, value, defaultValue, disabled,...rest } = props;
              return <TextField   
                        ref={(ref ?? undefined) as TextFieldProps["ref"]} 
                        type={type} 
                        {...(rest as TextFieldProps)} 
                        value={normalizeTextFieldValue(value, type ?? 'text')}
                        defaultValue={normalizeTextFieldValue(defaultValue, type ?? 'text')}
                        disabled={disabled}
                        onChange={(event) => {
                          onChange?.(event);
                        }}
                      />;
          }
          case "radio":{
              const {className,  onChange, value, checkedIcon, checked, icon,...rest } = props;
              return <Radio  
                        ref={(ref ?? undefined) as RadioProps["ref"]}  
                        {...rest as RadioProps} 
                        value={value}
                        checkedIcon={checkedIcon}
                        checked={checked}
                        icon={icon}
                        onChange={(event, checked) => {
                          onChange?.(event, checked);
                        }}
                      />;
          }
          default:
            return null;
        }
    }
);

export default TypedInput;