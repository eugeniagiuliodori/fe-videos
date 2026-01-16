
import DialogContent from '@/components/common/ui/DialogContent';
import Dialog from '@/components/common/ui/Dialog';
import DialogTitle from '@/components/common/ui/DialogTitle';
import Typography from '@/components/common/ui/Typography';
import DialogActions from '@/components/common/ui/DialogActions';
import Button from '@/components/common/ui/Button';
import { DialogProps } from '@mui/material';
import styles from './styles_1/Dialog.module.css';
import clsx from 'clsx';


export interface CoreCustomDialogESCProps  extends DialogProps{
  title:string;
  onAcept: ()=> void;
}

export const dialogTitleStyles = {
  fontWeight:700
};

export const dialogTypographyStyles = {
  fontWeight:500
};

const CoreDialog: React.FC<CoreCustomDialogESCProps> = ({open,onAcept,children, title, className,...rest}) => {
  const composedClassName = clsx(
                              /*styles.dialog,*/
                              className
                            );
  return (
    <Dialog open={open} className={composedClassName} {...rest}>
      <DialogTitle  className={styles.dialogTitle} sx={dialogTitleStyles}>{title}</DialogTitle>
      <DialogContent className={styles.dialogContent}  >
        <Typography sx={dialogTypographyStyles}>{children}</Typography>
      </DialogContent>
      <DialogActions>
        <Button className={styles.acceptButton} onClick={onAcept} variant="contained" autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CoreDialog;
