import { forwardRef } from "react";
import {MenuItem as MUIMenuItem} from "@mui/material";
import { MenuItemProps as MenuItemType } from "@mui/material";



    export type MenuItemProps<T = unknown> = Omit<MenuItemType, 'classes' | 'dense' | 'value'> & {value: T} ;


    type MenuItemComponent = <T = unknown>(
      props: MenuItemProps<T> & React.RefAttributes<HTMLElement>
    ) => React.ReactElement;

    const MenuItem=forwardRef (function <T = unknown>(props:MenuItemProps<T>, ref:React.ForwardedRef<any>) {
    const { value, className, children, focusVisibleClassName,  ...rest } = props;    
    return(
         <MUIMenuItem  
            ref={ref as React.Ref<any>}
            value={String(value)} 
            className={className}
            focusVisibleClassName={focusVisibleClassName}
            {...rest}
        >
            {children ?? String(value)}x
        </MUIMenuItem>
    );
}
)  as MenuItemComponent;

export default MenuItem;