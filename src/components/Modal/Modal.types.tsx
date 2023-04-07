export interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
  isForm?: boolean;
  onSubmit?: () => void;
}
