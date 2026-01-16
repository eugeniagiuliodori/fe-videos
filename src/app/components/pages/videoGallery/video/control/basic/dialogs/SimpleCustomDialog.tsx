import Dialog from '@/components/composed/Dialog';
import { CustomDialogESCProps } from "@/interfaces/interfaces";


const SimpleCustomDialog: React.FC<CustomDialogESCProps> = ({open,title, children ,onAcept, className, ...rest}) => {
  return (
    <Dialog open={open} 
            onClose={() => {}} 
            disableEscapeKeyDown  
            title={title}
            children={children}
            slotProps={{
              backdrop: {
                onClick: (e: React.MouseEvent) => e.stopPropagation(),
              },
            }}
            onAcept={onAcept}
            {...rest}
    >
    
    </Dialog>
  );
};

export default SimpleCustomDialog;
