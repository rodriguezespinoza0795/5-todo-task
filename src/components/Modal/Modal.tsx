import { Button, Typography, Modal, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface ConfirmationModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  handleComplete: () => void;
}

export default function ConfirmationModal({
  open,
  handleClose,
  title,
  handleComplete,
}: ConfirmationModalProps) {
  const { t } = useTranslation('common');

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
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
        >
          <Typography id='modal-modal-title' variant='h6' component='h6' textAlign={'center'}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', width: '100%', gap: '20px' }}>
            <Button
              fullWidth
              variant='outlined'
              sx={{ mt: 1.5 }}
              onClick={handleClose}
              color='error'
            >
              {t('cancel')}
            </Button>
            <Button fullWidth variant='contained' sx={{ mt: 1.5 }} onClick={handleComplete}>
              {t('confirm')}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
