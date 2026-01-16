import { forwardRef } from "react";
import BaseMenuItem from "@/components/common/core/MenuItem";
import { MenuItemProps } from "@/components/common/core/MenuItem";


    const MenuItem=forwardRef<HTMLLIElement, MenuItemProps> ((props, ref) => {
    const { className, children,  ...rest } = props;    
    return(
         <BaseMenuItem  
            ref={ref}
            className={className}
            {...rest}
         >
            {children}
        </BaseMenuItem>
    );
}
);

export default MenuItem;