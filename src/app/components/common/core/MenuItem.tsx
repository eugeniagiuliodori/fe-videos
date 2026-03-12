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
    props: MenuItemProps<T> & { ref?: React.Ref<HTMLLIElement> }
    ) => {
    const { value, className, ref, children, icon, sx,  
            onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onFocus, onBlur,
            ...rest } = props; 
    const mergedSx = mergeSx(sx); 
    const composedClassName = clsx(className);
    
    return(
         <MUIMenuItem  
            ref={ref}
            component="li"
            value={String(value)} 
            className={composedClassName}
            sx={mergedSx}
            /*-- PARA EL REFACTOR CON DEFINICIONES DE STATES Y GLOBAL STATES.
            PARA CADA EVENTO EN ÚLTIMO ORDEN, INVOCAR SU CORRESPONDIENTE PROPAGADO 
            DESDE PROPS
            --*/
            /* hover */
            onMouseEnter={()=>{}}
            onMouseLeave={()=>{}}
            /* focus */
            onFocus={()=>{}}
            onBlur={()=>{}}
            /* active */
            onMouseUp={()=>{}}
            onMouseDown={()=>{}}
            /*--                                                             --*/
            {...rest}
        >
 
            {icon && <ListItemIcon >{icon}</ListItemIcon>}
            {children}
        </MUIMenuItem>
    );
}


export default MenuItem;