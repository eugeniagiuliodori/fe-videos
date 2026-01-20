import { forwardRef } from "react";
import BaseButton, {ButtonProps} from "@/components/common/core/Button";
import styles from './styles_1/Button.module.css';
import clsx from 'clsx';

const Button=forwardRef<HTMLButtonElement, ButtonProps> ((props, ref) => {
  const { className, children, ...rest } = props;
  const composedClassName = clsx(
                                styles.button,
                                className
                              );
  return (
    <BaseButton
      ref={ref}
      className={composedClassName}
      {...rest}
      >
        {children}
    </BaseButton>
  );
}
);
export default Button;
