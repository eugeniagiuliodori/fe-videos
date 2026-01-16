import { forwardRef } from "react";
import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";       
import type { TextFieldProps } from "@mui/material/TextField";
import type { SliderProps } from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import type { RadioProps } from "@mui/material/Radio";

export type TypedInputProps =
  | ({
      type: "text" | "password" | "number";
      onChange?: TextFieldProps["onChange"];
    } & Omit<TextFieldProps, "onChange">)
  | ({
      type: "range";
      onChange?: SliderProps["onChange"];
    } & Omit<SliderProps, "onChange">)
  | ({
      type: "radio";
      onChange?: RadioProps["onChange"];
    } & Omit<RadioProps, "onChange">);
  

const TypedInput = 
  forwardRef<unknown, TypedInputProps>((props, ref) => 
  {
        const {className, type, ...rest } = props;

        switch (type) {
          case "range":
            return <Slider   ref={(ref ?? undefined) as SliderProps["ref"]} {...(rest as SliderProps)} />;

          case "text":
          case "password":
          case "number":
            return <TextField   ref={(ref ?? undefined) as TextFieldProps["ref"]} type={type} {...(rest as TextFieldProps)} />;

          case "radio":
              return <Radio  ref={(ref ?? undefined) as RadioProps["ref"]}  {...rest as RadioProps} />;
          default:
            return null;
        }
    }
);

export default TypedInput;