import BaseMenuItem from "@/components/common/core/MenuItem";
import { MenuItemProps } from "@/components/common/core/MenuItem";
import { mergeSx } from "@/components/utils/utils";
import clsx from 'clsx';


    const MenuItem = <T,>(
  props: MenuItemProps<T> & { ref?: React.Ref<HTMLLIElement> }
) => {
  const { className, sx, ref, children, ...rest } = props;

  const mergedSx = mergeSx(sx);
  const composedClassName = clsx(className);

  return (
    <BaseMenuItem
      ref={ref}
      className={composedClassName}
      sx={mergedSx}
      {...rest}
    >
      {children}
    </BaseMenuItem>
  );
}

export default MenuItem;