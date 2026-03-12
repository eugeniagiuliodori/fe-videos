import CircularProgress from '@mui/material/CircularProgress';
import BaseButton, {ButtonProps} from "@/components/common/core/Button";
import muiStyles from './styles/Button/mui.module.css';
import styles from './styles/Button/button.module.css';
import clsx from 'clsx';
import { mergeSx } from "@/components/utils/utils";


const Button = 
(props: ButtonProps & {ref?: React.Ref<HTMLButtonElement>}) => {
  const { className, ref, children, loading, loadingIndicator, mainAxis, crossAxis, directionFlex, sx,...rest } = props;
  
  const mergedSx = mergeSx(sx);
  const composedClassName = clsx(muiStyles.pmuiButton, loading && muiStyles.pmuiButtonOnLoad, className, muiStyles.pmuiButton_fixedStyle);
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
          <span className={styles.loaderWrapperLoaderWrapper}>
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
