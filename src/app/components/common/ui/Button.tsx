import CircularProgress from '@mui/material/CircularProgress';
import BaseButton, {ButtonProps} from "@/components/common/core/Button";
import styles from './styles_1/Button.module.css';
import clsx from 'clsx';
import {AlignMain, AlignCross, AlignDirection } from '../types/interfaces';
import { mergeSx } from "@/components/utils/utils";


const Button = 
(props: ButtonProps & {ref?: React.Ref<HTMLButtonElement>}) => {
  const { className, ref, children, loading, loadingIndicator, mainAxis, crossAxis, directionFlex, sx,...rest } = props;
  
  const mergedSx = mergeSx(sx);
  const composedClassName = clsx(styles.button, loading && styles.buttonOnLoad, className, styles.button_fixedStyle);
    /*otra forma sintácticamente válida:
    clsx(styles.button, { [styles.buttonOnLoad]: loading }, className);*/

  return (
    <BaseButton
      ref={ref}
      className = {composedClassName}
      sx={mergedSx}
      mainAxis = {mainAxis}
      crossAxis = {crossAxis}
      directionFlex = {directionFlex}
      loading={loading}
      disabled={loading ? loading : false}
      aria-busy={loading == null ? undefined : loading ? "true" : "false"}
      loadingIndicator={  
          <span className={styles.loaderWrapper}>
            {loadingIndicator??<CircularProgress/>}
          </span>
      }
      {...rest}
      > 
          {children}  
    </BaseButton>
  );
}

export default Button;
