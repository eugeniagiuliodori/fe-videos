import React from "react";
import { Select as MUISelect, InputBase } from "@mui/material";
import MenuItem from "@/components/common/core/MenuItem";
import { SelectProps as SelectType } from "@mui/material/Select";
import { SxProps, Theme } from '@mui/material/styles';
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';


export type SelectOwnProps<T = unknown>= {
  menuSx?: SxProps<Theme>;
  menuItemSx?: SxProps<Theme>;
  options: SelectOption<T>[];
  icons?: {label: string; icon: React.ElementType}[];

}

export type SelectOption <T = unknown> = {
  value: T;
  label: string;
}

// Combinar con todas las props de Select, excepto las que redefinimos
export type SelectProps <T = unknown> = SelectOwnProps<T> & Omit<SelectType<T>, 'ref' | 'MenuProps' | 'slotProps' | 'renderValue' | 'variant' >;


    const Select = <T,>
    (props: SelectProps<T> & {ref?: React.Ref<HTMLDivElement>}) => 
      {

  const { className, sx, ref, options, icons, label, onChange, value,  menuSx, menuItemSx, ...rest } = props;
  const id = label ? `${label}-label` : undefined;
  const mergedSx = mergeSx(sx);
  const composedClassName = clsx(className);


 const getIcon = (label: string) =>
  icons?.length
    ? icons.length === options.length
      ? icons.find(elem => elem.label === label)?.icon
      : icons[0]?.icon
    : undefined;
  /*const getIcon = (label: string) =>
                           (options.length===1 || options.length===icons?.length) ? 
                              icons?icons[0].icon:undefined:
                                  options.length===icons?.length ? 
                                      icons.find(elem => elem.label === label)?.icon ? 
                                          undefined : undefined : undefined*/


  return (
    <MUISelect
      ref={ref}
      variant="standard"
      disableUnderline
      className={composedClassName}
      sx={mergedSx}
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

      {options.map((opt: SelectOption<any>,index:number) => {
        const Icon = getIcon(opt.label);
        return <MenuItem  icon={Icon ? <Icon color="primary"/> : opt.label} key={String(index)} value={opt.value} sx={menuItemSx} children={opt.value}/>
      }
      )}
    </MUISelect>
  );
}

export default Select;
