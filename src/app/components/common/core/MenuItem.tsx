import { forwardRef } from "react";
import {MenuItem as MUIMenuItem} from "@mui/material";
import { MenuItemProps as MenuItemType } from "@mui/material";


    export interface MenuItemProps<T = unknown> extends Omit<MenuItemType, 'value'> {
    value: T;
    }


    type MenuItemComponent = <T = unknown>(
      props: MenuItemProps<T> & React.RefAttributes<HTMLElement>
    ) => React.ReactElement;

    const MenuItem=forwardRef (function <T = unknown>(props:MenuItemProps<T>, ref:React.ForwardedRef<any>) {
    const { value, className, children,  ...rest } = props;    
    return(
         <MUIMenuItem  
            ref={ref as React.Ref<any>}
            value={String(value)} 
            className={className}
            {...rest}
        >
            {children ?? String(value)}x
        </MUIMenuItem>
    );
}
)  as MenuItemComponent;

export default MenuItem;