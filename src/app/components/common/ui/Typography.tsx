import { forwardRef } from "react";
import BaseTypography  from "@/components/common/core/Typography";
import { TypographyProps } from "@/components/common/core/Typography";

const Typography=forwardRef<HTMLLIElement, TypographyProps> ((props, ref) => {
    const { className, children, ...rest } = props;
    return(
         <BaseTypography 
            ref={ref}
            className={className}
            {...rest}
        >
            {children}
        </BaseTypography>
    );
}
);

export default Typography;