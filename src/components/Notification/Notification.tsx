import { Alert, Snackbar } from '@mui/material';
import { NotificationProps } from './Notifications.types';

export default function Notification({ open, msg, severity, handleClose }: NotificationProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={2000}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  );
}
