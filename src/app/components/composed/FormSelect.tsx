import {useRef} from "react";
import { FormControl, InputLabel} from "@mui/material";
import Select from "@/components/common/ui/Select";
import styles from "@/components/composed/styles_1/Form.module.css";
import { OptionValue } from "@/interfaces/interfaces";
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
   variant="outlined",
   ...selectProps
}: SelectProps<OptionValue> ) => {



  const labelId = label ? `${label}-label` : undefined;


 
  return (

    <FormControl size={size} className={styles.formControl} >
      {label && <InputLabel id={labelId} className={styles.inputLabel}>{label}</InputLabel>}
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
