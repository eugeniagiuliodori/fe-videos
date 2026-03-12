import {Menu as MUIMenu} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import { MenuProps as MenuType } from "@mui/material";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';


    export type MenuProps = 
        Omit<MenuType, 'ref' | 'classes' | 'dense' | 'component' | 
                            'focusVisibleClassName'> 
       
    const Menu =(
    props: MenuProps & { ref?: React.Ref<HTMLDivElement> }
    ) => {
    const { className, ref, children, anchorEl, open , sx,  
            onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onFocus, onBlur,
            ...rest } = props; 
    const mergedSx = mergeSx(sx); 
    const composedClassName = clsx(className);
    
    let openm = Boolean(anchorEl);
    return(
         <MUIMenu 
            ref={ref}
            anchorEl={anchorEl}
            open={open}
            onClose={()=>openm=false}
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
            {children}
        </MUIMenu>
    );
}


export default Menu;