import {MenuItem as MUIMenuItem} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import { MenuItemProps as MenuItemType } from "@mui/material";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';


    export type MenuItemProps<T = unknown> = 
        Omit<MenuItemType, 'ref' | 'classes' | 'dense' | 'value' | 'component' | 
                            'focusVisibleClassName'> 
        & {
            value: T;
            icon?: React.ReactNode;
        } ;

    const MenuItem = <T,>(
    props: MenuItemProps<T> & { ref?: React.Ref<HTMLButtonElement> }
    ) => {
    const { value, className, ref, children, icon, sx,  ...rest } = props; 
    const mergedSx = mergeSx(sx); 
    const composedClassName = clsx(className);
    
    return(
         <MUIMenuItem  
            ref={ref}
            value={String(value)} 
            className={composedClassName}
            sx={mergedSx}
            {...rest}
        >
 
            {icon && <ListItemIcon >{icon}</ListItemIcon>}
            {children}
        </MUIMenuItem>
    );
}


export default MenuItem;