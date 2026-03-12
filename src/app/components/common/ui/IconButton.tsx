import { IconButtonProps as IconButtonType} from "@mui/material";
import { mergeSx } from "@/components/utils/utils";
import muiStyles from './styles/IconButton/mui.module.css';
import BaseIconButton from "../core/IconButton";
import clsx from 'clsx';

export type IconButtonProps  = Omit<IconButtonType,'ref' | 'classes'| 'loadingIndicator'> 

const IconButton = 
(props: IconButtonProps & {ref?: React.Ref<HTMLButtonElement>}) => {
  const { className, ref, children, disabled, sx, ...rest } = props;

  const mergedSx = mergeSx(sx);
 const composedClassName = clsx(muiStyles.pmuiIconButton, className);

  return (
    <BaseIconButton
      ref={ref}
      className={composedClassName}
      sx={mergedSx}
      disabled={disabled}

      {...rest}
      >
          {children}   
    </BaseIconButton>
  );
}
export default IconButton;

