import Dialog from '@/components/composed/Dialog';
import { CustomDialogProps } from '@/components/composed/Dialog';

const SimpleCustomDialog: React.FC<CustomDialogProps> = ({open,title, children ,onAcept, className, ...rest}) => {
  return (
    <Dialog open={open} 
            onClose={() => {}} 
            disableEscapeKeyDown  
            title={title}
            children={children}
            onAcept={onAcept}
            {...rest}
    />
  );
};

export default SimpleCustomDialog;
