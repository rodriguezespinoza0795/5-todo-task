export interface BasicModalProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  title: string;
  action: (newTask: string) => void;
}
