import BaseTypography  from "@/components/common/core/Typography";
import { TypographyProps } from "@/components/common/core/Typography";
import type {MapVariantTag, TypeVariantTypography} from "../types/interfaces";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';

const Typography = <V extends TypeVariantTypography>(
      props: TypographyProps & 
      {
        variant: V;
        ref?: React.Ref<MapVariantTag<V>>;
      },
      
  ) => {

    const { className, sx, ref, variant, children, ...rest } = props;

    const mergedSx = mergeSx(sx);
    const composedClassName = clsx(className);

    return(
         <BaseTypography 
            ref={ref}
            className={composedClassName}
            sx={mergedSx}
            variant={variant}
            {...rest}
        >
            {children}
        </BaseTypography>
    );
}

export default Typography;