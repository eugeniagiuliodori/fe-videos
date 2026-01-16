import {useRef} from "react";
import { FormControl, InputLabel} from "@mui/material";
import Select from "@/components/common/ui/Select";
import styles from "../../Control.module.css";
import { OptionValue } from "@/interfaces/interfaces";
import { SelectProps } from "@/components/common/core/Select";
import { SxProps, Theme } from '@mui/material/styles';




const ref = useRef<any>(null);
const CustomSelect = ({
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

  const menuItem_sx: SxProps<Theme> = {
    backgroundColor: 'white',
    color: 'black',
  };

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
        menuItemSx= {menuItem_sx}
     
      />
    </FormControl>
  );
};

export default CustomSelect;
