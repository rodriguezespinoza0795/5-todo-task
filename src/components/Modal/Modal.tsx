import { Typography, Modal, Box } from '@mui/material';
import { BasicModalProps } from './Modal.types';

export default function BasicModal({
  open,
  handleClose,
  title,
  children,
  isForm = false,
  onSubmit,
}: BasicModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          component={isForm ? 'form' : 'div'}
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 400,
            width: '100%',
            minWidth: 320,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={onSubmit}
        >
          <Typography id='modal-modal-title' variant='h6' component='h6' textAlign={'center'}>
            {title}
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
