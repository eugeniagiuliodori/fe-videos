import React from "react";
import BaseSelect from "@/components/common/core/Select";
import {SelectProps}  from "@/components/common/core/Select";
import styles from './styles_1/Select.module.css';
import clsx from 'clsx';


const Select = React.forwardRef<
  unknown,
  SelectProps<any>
>(function SelectInner(
  props: SelectProps<any>,
  ref: React.ForwardedRef<unknown>
)   {
  const { className, options, label, onChange, value, menuSx, menuItemSx, ...rest } = props;  
  const id = label ? `${label}-label` : undefined;
      const composedClassName = clsx(
                                  styles.root,
                                  className
                                );

  return (
      <BaseSelect 
          ref={ref}
          className={composedClassName}
          menuSx={menuSx}
          menuItemSx={menuItemSx}
          labelId={id} 
          label={label} 
          value={value}
          onChange={onChange} 
          options={options}
          {...rest}
      />
  );
}
);
export default Select;
