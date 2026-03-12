import {useRef} from "react";
import { FormControl, InputLabel} from "@mui/material";
import Select from "@/components/common/ui/Select";
import styles from "@/components/composed/styles/Form/form.module.css";
import clsx from 'clsx';
import { OptionValue } from "@/types/interfaces";
import { SelectProps } from "@/components/common/core/Select";




const ref = useRef<any>(null);
const FormSelect = ({
  value,
  onChange,
  label,
  options,
  menuItemSx,
  menuSx,
  size = "small",
   ...selectProps
}: SelectProps<OptionValue> ) => {



  const labelId = label ? `${label}-label` : undefined;


  const composedClassName = clsx(styles.pmuiformControl);
  return (

    <FormControl size={size} className={composedClassName} >
      {label && <InputLabel id={labelId} className={styles.pmuiinputLabel}>{label}</InputLabel>}
      <Select
        ref={ref}
        {...selectProps}
        labelId={labelId}
        value={value}
        onChange={onChange}
        label={label}
        options={options}
        menuSx={menuSx}
        menuItemSx= {menuItemSx}
     
      />
    </FormControl>
  );
};

export default FormSelect;
