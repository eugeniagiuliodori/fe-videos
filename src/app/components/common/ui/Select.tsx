import React from "react";
import BaseSelect from "@/components/common/core/Select";
import {SelectProps}  from "@/components/common/core/Select";
import styles from './styles_1/Select.module.css';
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';


const Select = <T,>
(props: SelectProps<T> & {ref?: React.Ref<HTMLDivElement>}) => 
  {

  const { className, sx, ref, options, icons, label, onChange, value, menuSx, menuItemSx, ...rest } = props;  
  const id = label ? `${label}-label` : undefined;
  const mergedSx = mergeSx(sx);
  const composedClassName = clsx(styles.root,className);

  return (
      <BaseSelect 
          ref={ref}
          className={composedClassName}
          sx={mergedSx}
          menuSx={menuSx}
          menuItemSx={menuItemSx}
          labelId={id} 
          label={label} 
          value={value}
          onChange={onChange} 
          options={options}
          icons={icons}
          {...rest}
      />
  );
}

export default Select;
