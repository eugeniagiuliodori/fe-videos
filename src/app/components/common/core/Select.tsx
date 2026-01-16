import React from "react";
import { Select as MUISelect } from "@mui/material";
import MenuItem from "@/components/common/core/MenuItem";
import { SelectProps as SelectType, SelectChangeEvent } from "@mui/material/Select";
import { SxProps, Theme } from '@mui/material/styles';

export type SelectOwnProps<T = unknown>= {
  menuSx?: SxProps<Theme>;
  menuItemSx?: SxProps<Theme>;
  options: T[];
}


// Combinar con todas las props de Select, excepto las que redefinimos
export type SelectProps <T = unknown> = SelectOwnProps<T> & Omit<SelectType<T>,  'MenuProps' | 'slotProps' | 'renderValue' >;


type SelectComponent = <T = unknown>(
  props: SelectProps<T> & React.RefAttributes<unknown>
) => React.ReactElement | null;

const Select = React.forwardRef<
  unknown,
  SelectProps<any>
>(function SelectInner(
  props: SelectProps<any>,
  ref: React.ForwardedRef<unknown>
)  
  {
  const { className, options, label, onChange, value, menuSx, menuItemSx, ...rest } = props;
  const id = label ? `${label}-label` : undefined;

  return (
    <MUISelect
      ref={ref}
      className={className}
      MenuProps={{
        PaperProps: {
          sx: menuSx
        },
      }}
      labelId={id}
      label={label}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {options.map((opt) => (
        <MenuItem key={String(opt)} value={opt} sx={menuItemSx} children={String(opt)}/>
      ))}
    </MUISelect>
  );
}) as SelectComponent;

export default Select;
