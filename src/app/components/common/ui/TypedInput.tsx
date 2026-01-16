import { forwardRef } from "react";     
import BaseTypedInput, {TypedInputProps } from "@/components/common/core/TypedInput"


const SimpleCustomInput = 
  forwardRef<HTMLInputElement | HTMLSpanElement, TypedInputProps>((props, ref) => 
  {
    const { className,   ...rest } = props;  
     return (
      <BaseTypedInput
          ref={ref}
          className={className}
          {...rest}
      />
  );
  }
);

export default SimpleCustomInput;