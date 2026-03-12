import BaseMenu from "@/components/common/core/Menu";
import { Box, CSSProperties, MenuProps as MenuType } from "@mui/material";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';
import Button from "./Button";
import { useState } from "react";


    export type MenuProps = 
        Omit<MenuType, 'ref' | 'classes' | 'dense' | 'component' | 
                            'focusVisibleClassName' | 'open'> & {disabled:boolean, text: string}
       
    const Menu = (
    props: MenuProps & { ref?: React.Ref<HTMLDivElement> }
    ) => {
    const { className, ref, children, sx, text, disabled,  ...rest } = props; 
    const mergedSx = mergeSx(sx); 
    const composedClassName = clsx(className);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
         < >
            <Button disabled={disabled} sx={{"--pmui-dsc-width":"7rem","--pmui-dsc-minWidth":"7rem", "--pmui-dsc-maxWidth":"7rem"}} onClick={handleOpen}>{text}</Button>
            <BaseMenu 
                ref={ref}
                 anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={composedClassName}
                sx={mergedSx}
                {...rest}
            >
                {children}
            </BaseMenu>
        </>
    );
}


export default Menu;