export interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  handleComplete: (newTask: string) => void;
}
