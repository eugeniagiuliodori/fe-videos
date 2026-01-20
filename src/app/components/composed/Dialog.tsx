
import DialogContent from '@/components/common/ui/DialogContent';
import Dialog from '@/components/common/ui/Dialog';
import DialogTitle from '@/components/common/ui/DialogTitle';
import Typography from '@/components/common/ui/Typography';
import DialogActions from '@/components/common/ui/DialogActions';
import Button from '@/components/common/ui/Button';
import { DialogProps } from '../common/core/Dialog';
import styles from './styles_1/Dialog.module.css';
import clsx from 'clsx';


export interface CustomDialogProps  extends DialogProps{
  title:string;
  onAcept: ()=> void;
}

export const dialogTitleStyles = {
  fontWeight:700
};

export const dialogTypographyStyles = {
  fontWeight:500
};

const CustomDialog: React.FC<CustomDialogProps> = ({open,onAcept,children, title, className, paperSx, backdropSx,...rest}) => {
  const composedClassName = clsx(
                              /*styles.dialog,*/
                              className
                            );
  return (
    <Dialog open={open} className={composedClassName} paperSx={paperSx} backdropSx={backdropSx} {...rest}>
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

export default CustomDialog;
