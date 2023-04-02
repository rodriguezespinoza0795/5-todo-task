export interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  action: (newTask: string) => void;
}
