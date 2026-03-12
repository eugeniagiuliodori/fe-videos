import BaseDialogActions from "@/components/common/core/DialogActions";
import { DialogActionsProps } from "@/components/common/core/DialogActions";
import { mergeSx } from "@/components/utils/utils";
import styles from './styles/DialogActions/mui.module.css';
import clsx from 'clsx';

 
const DialogActions = 
(props: DialogActionsProps & {ref?: React.Ref<HTMLDivElement>}) => {

    const { className, ref, sx, directionFlex, mainAxis, crossAxis,  ...rest } = props;

    const mergedSx = mergeSx(sx);
    const composedClassName = clsx(className, styles.dialogActions_fixedStyle);

    return(
        <BaseDialogActions 
            ref={ref}
            className={composedClassName}
            directionFlex={directionFlex}
            mainAxis={mainAxis}
            crossAxis={crossAxis}
            sx={mergedSx}
            {...rest}
        />)
}

export default DialogActions;